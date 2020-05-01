import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import {Typography, Button, Slider, TextField, Card} from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import VisibilityIcon from '@material-ui/icons/Visibility';

import Theme from "../constants/theme";
import Draggable from "./draggable";
import {Row, Col, Separator, FlexView} from "../components/layout";

const CardWrapper = styled(Card)`
  margin: 2rem;
  margin-top: ${({slideid}) => slideid!=="" ? '-3rem': '1rem'};
`;
const GreyWrapper = styled(Row)`
  background: ${Theme.lightGrey};
`;
const AliceBlueWrapper = styled.div`
  background: aliceblue;
  text-align: center;
  padding: 2rem;
`;
const NextButton = styled(Button)`
  background: ${Theme.secColor} !important;
  margin-left: 1rem !important;
  border-radius: 0 !important;
`;
const HeaderColWrapper = styled(Col)`
  border-right: 1px solid #7A8C9F;
`;
const TextInput = styled.input`
  margin-left: 1rem;
  padding: 0.5rem;
  width: 60%;
`;
const SliderWrapper = styled(Slider)`
  padding: 5px !important;
`;
const ButtonWrapper = styled(Button)`
    width: ${({width}) => width}% !important;
    ${({selected})=> selected && css `
      opacity: 0.8 !important;
    `};
`;
const ImageWrapper = styled.img`
  height: auto;
  width: ${({width}) => width}% ;
  &:hover {
    cursor: pointer;
  }
  ${({selected})=> selected && css `
    border: 1px dashed black;
  `};
  ${({selected})=> selected && css `
    padding: 1rem;
  `};
`;
const SpanWrapper = styled.span`
  color: #3f51b5;
`;
const NavWrapper = styled(Row)`
  position: fixed;
  box-shadow: 2px 2px 12px rgba(0,0,0,0.1);
  z-index: 1;
`;

const Home = () => {
  let dataStored = false;
  let dataItem = {};

  if(typeof window !== "undefined"){
    const dataString = window.localStorage.getItem("data");

    if(typeof dataString !== "undefined")
      dataItem = JSON.parse(dataString);

    dataStored = !(dataItem == null || typeof dataItem === "undefined" || Object.keys(dataItem).length === 0);
  }

  const [slideId, setSlideId] = useState("");
  const [slideValue, setSlideValue] = useState("");
  const [button1Width, setButton1Width] = useState(dataStored ? dataItem['button1Width'] : 30);
  const [button2Width, setButton2Width] = useState(dataStored ? dataItem['button2Width'] : 30);
  const [button3Width, setButton3Width] = useState(dataStored ? dataItem['button3Width'] : 30);
  const [videoWidth, setVideoWidth] = useState(dataStored ? dataItem['videoWidth'] : 75);
  const [logoWidth, setLogoWidth] = useState(dataStored ? dataItem['logoWidth'] : 25);
  const [carouselImageWidth, setCarouselImageWidth] = useState(dataStored ? dataItem['carouselImageWidth'] : 75);
  const [title, setTitle] = useState(dataStored ? dataItem['title'] : "The Lorem Ipasum dolor");
  const [subTitle, setSubTitle] = useState(dataStored ? dataItem['subTitle'] : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a typespecimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
  const [footer, setFooter] = useState(dataStored ? dataItem['footer'] : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.");
  const [email, setEmail] = useState(dataStored ? dataItem['email'] : "janedoe@gmail.com");
  const [tel, setTel] = useState(dataStored ? dataItem['tel'] : "71837183718");
  const [name, setName] = useState(dataStored ? dataItem['name'] : "Jane doe | Sales Development Representative");
  const [editTitle, setEditTitle] = useState(false);
  const [editSubTitle, setEditSubTitle] = useState(false);
  const [editFooter, setEditFooter] = useState(false);
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editTel, setEditTel] = useState(false);

  useEffect(() => {
    const data = {
      'title': title,
      'subTitle': subTitle,
      'footer': footer,
      'button1Width': button1Width,
      'button2Width': button2Width,
      'button3Width': button3Width,
      'videoWidth': videoWidth,
      'logoWidth': logoWidth,
      'carouselImageWidth': carouselImageWidth,
      'email': email,
      'name': name,
      'tel': tel,
    };

    localStorage.setItem("data",JSON.stringify(data));
  });

  const handleSaveNext = () => {
    handlePreview();
  }

  const handlePreview = () => {
    setSlideId("");
    setSlideValue("");
  }

  const handleChange = (event,value) => {
    if(slideId === "button1"){
      setButton1Width(value);
    }else if(slideId === "button2"){
      setButton2Width(value);
    }else if(slideId === "button3"){
      setButton3Width(value);
    }else if(slideId === "video"){
      setVideoWidth(value);
    }else if(slideId === "carouselImage"){
      setCarouselImageWidth(value);
    }else if(slideId === "logoImage"){
      setLogoWidth(value);
    }

    setSlideValue(value);
  }

  const handleButton1Click = () => {
    setSlideId("button1");
    setSlideValue(button1Width);
  }

  const handleButton2Click = () => {
    setSlideId("button2");
    setSlideValue(button2Width);
  }

  const handleButton3Click = () => {
    setSlideId("button3");
    setSlideValue(button3Width);
  }

  const handleVideoClick = () => {
    setSlideId("video");
    setSlideValue(videoWidth);
  }

  const handleCarouselImage = () => {
    setSlideId("carouselImage");
    setSlideValue(carouselImageWidth);
  }

  const handleLogoImage = () => {
    setSlideId("logoImage");
    setSlideValue(logoWidth);
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubTitleChange = (e) => {
    setSubTitle(e.target.value);
  }

  const handleFooterChange = (e) => {
    setFooter(e.target.value);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleTelChange = (e) => {
    setTel(e.target.value);
  }

  const handleEditTitle = () => {
    setEditTitle(true);
  }

  const handleEditSubTitle = () => {
    setEditSubTitle(true);
  }

  const handleEditFooter = () => {
    setEditFooter(true);
  }

  const handleEditName = () => {
    setEditName(true);
  }

  const handleEditEmail = () => {
    setEditEmail(true);
  }

  const handleEditTel = () => {
    setEditTel(true);
  }

  const storeCord = (id,obj) => {
    localStorage.setItem(`${id}_cord`,JSON.stringify(obj));
  }
  
  return (
    <GreyWrapper>
      {slideId != "" && (
        <NavWrapper alignItems="center" gap={1} gutter={2}>
          {(slideId === "carouselImage" || slideId === "logoImage") && (
            <HeaderColWrapper sm={2} gutter={0.5}>
              <Typography color="textSecondary" variant="body2">Change Image</Typography>
            </HeaderColWrapper>
          )}
          <HeaderColWrapper sm={3} gutter={0.5}>
            <Row align="center">
              <Col sm={2}>
                <Typography color="textSecondary" variant="body2" display="inline">Size</Typography>
              </Col>
              <Col sm={9}>
                <SliderWrapper value={slideValue} onChange={handleChange} aria-labelledby="continuous-slider" />
              </Col>
            </Row>
          </HeaderColWrapper>
          <Col sm={4} gutter={0.5}>
            <Typography color="textSecondary" variant="body2" display="inline">Link URL</Typography>
            <TextInput
              id="link_url"
              type="text"
              placeholder="Enter here"
            />
          </Col>
        </NavWrapper>
      )}
      <GreyWrapper gap={slideId!=="" ? 5 : 1} gutter={2} alignItems="center" justify="space-between">
        <Typography variant="body1">New Page</Typography>
        <Button color="primary" startIcon={<VisibilityIcon/>} onClick={handlePreview}>Preview</Button>
      </GreyWrapper>
      <CardWrapper slideid={slideId}>
        <Row gutter={1} gap={1}>
          <Col sm={6}>
            <Draggable id="logo" storeCord={storeCord}>
              <ImageWrapper justify="left" selected={slideId === "logoImage"} width={logoWidth} onClick={handleLogoImage} src="/static/images/logo.png"/>
            </Draggable>
          </Col>
          <Col sm={6}>
            <Row>
              <Col smOffset={1} sm={5} flex alignItems="center" justify="space-around">
                <img src="/static/images/google_icon.png"/>
                <img src="/static/images/fb_icon.png"/>
                <img src="/static/images/twitter_icon.png"/>
              </Col>
              <Col sm={6}>
                {editName ? (
                  <TextField
                    id="name"
                    label="Edit Name"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        setEditName(false);
                      }
                    }}
                    variant="outlined"
                  />
                ) : (
                  <Typography color="textSecondary" variant="body1" onClick={handleEditName}>
                    {name}
                  </Typography>
                )}
                <Separator/>
                {editEmail ? (
                  <TextField
                    id="email"
                    label="Edit email"
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        setEditEmail(false);
                      }
                    }}
                    variant="outlined"
                  />
                ) : (
                  <Typography color="textSecondary" variant="body1" onClick={handleEditEmail}>
                    Email:&nbsp;
                    <SpanWrapper>{email}</SpanWrapper>
                  </Typography>
                )}
                <Separator/>
                {editTel ? (
                  <TextField
                    id="tel"
                    label="Edit Tel"
                    type="tel"
                    value={tel}
                    onChange={handleTelChange}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        setEditTel(false);
                      }
                    }}
                    variant="outlined"
                  />
                ) : (
                  <Typography color="textSecondary" variant="body1" onClick={handleEditTel}>
                    Tel:&nbsp;
                    <SpanWrapper>{tel}</SpanWrapper>
                  </Typography>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
        <Separator height={4}/>
        <FlexView alignItems="center" reverse gutter={3}>
          {editTitle ? (
            <TextField
              id="title"
              label="Edit Title"
              type="text"
              value={title}
              fullWidth
              onChange={handleTitleChange}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  setEditTitle(false);
                }
              }}
              variant="outlined"
            />
          ) : (
            <Typography color="textSecondary" variant="h3" align="center" onClick={handleEditTitle}>{title}</Typography>
          )}
          <Separator height={2}/>
          {editSubTitle ? (
            <TextField
              id="sub-title"
              label="Edit SubTitle"
              type="text"
              multiline
              fullWidth
              helperText="shift+Enter to save changes."
              value={subTitle}
              onChange={handleSubTitleChange}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && event.shiftKey) {
                  event.preventDefault();
                  setEditSubTitle(false);
                }
              }}
              variant="outlined"
            />
          ) : (
            <Typography color="textSecondary" variant="body1" align="center" onClick={handleEditSubTitle}>
              {subTitle}
            </Typography>
          )}
          <Separator height={2}/>
          <Draggable storeCord={storeCord} id="video" justify="center">
            <ImageWrapper selected={slideId === "video"} width={videoWidth} src="/static/images/video_icon.png" onClick={handleVideoClick}/>
          </Draggable>
          <Separator height={4}/>
          <Row gap={1}>
            <Col sm={4} flex justify="center" gutter={1}>
              <ButtonWrapper selected={slideId === "button1"} width={button1Width} color="primary" variant="contained" onClick={handleButton1Click}>
                Button1
              </ButtonWrapper>
            </Col>
            <Col sm={4} flex justify="center" gutter={1}>
              <ButtonWrapper selected={slideId === "button2"} width={button2Width} color="primary" variant="contained" onClick={handleButton2Click}>
                Button2
              </ButtonWrapper>
            </Col>
            <Col sm={4} flex justify="center" gutter={1}>
              <ButtonWrapper selected={slideId === "button3"} width={button3Width} color="primary" variant="contained" onClick={handleButton3Click}>
                Button3
              </ButtonWrapper>
            </Col>
          </Row>
          <Separator height={8}/>
          <GreyWrapper gap={2}>
            <Col flex justify="center" sm={4} onClick={handleCarouselImage}>
              <ImageWrapper selected={slideId === "carouselImage"} width={carouselImageWidth} src="/static/images/car_1.png"/>
            </Col>
            <Col flex justify="center" sm={4} onClick={handleCarouselImage}>
              <ImageWrapper selected={slideId === "carouselImage"} width={carouselImageWidth} src="/static/images/car_2.png"/>
            </Col>
            <Col flex justify="center" sm={4} onClick={handleCarouselImage}>
              <ImageWrapper selected={slideId === "carouselImage"} width={carouselImageWidth} src="/static/images/car_3.png"/>
            </Col>
          </GreyWrapper>
        </FlexView>
        <Separator height={4}/>
        <AliceBlueWrapper>
          {editFooter ? (
            <TextField
              id="footer"
              label="Edit Footer"
              type="text"
              multiline
              fullWidth
              helperText="shift+Enter to save changes."
              value={footer}
              onChange={handleFooterChange}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && event.shiftKey) {
                  event.preventDefault();
                  setEditFooter(false);
                }
              }}
              variant="outlined"
            />
          ) : (
            <Typography color="textSecondary" variant="body1" align="center" onClick={handleEditFooter}>
              {footer}
            </Typography>
          )}
        </AliceBlueWrapper>
      </CardWrapper>
      <Row alignItems="center" justify="flex-end">
        <Button>Cancel</Button>
        <NextButton
          variant="contained"
          color="primary"
          size="large"
          endIcon={<ArrowForwardIcon/>}
          onClick={handleSaveNext}
        >
          Save and Next
        </NextButton>
      </Row>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </GreyWrapper>
  )
};

export default Home;