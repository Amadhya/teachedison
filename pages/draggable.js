import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: ${({justify}) => justify};
  transform: ${({x,y}) => `translate(${x}px, ${y}px)`};
  ${({ isDragging }) =>
  isDragging && css`
    opacity: 0.8;
    cursor: grabbing;
  `};
`;

export default class Draggable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isDragging: false,
  
      originalX: 0,
      originalY: 0,
  
      translateX: 0,
      translateY: 0,
  
      lastTranslateX: 0,
      lastTranslateY: 0
    };
  }

  componentDidMount(){
    const {id} = this.props;
    const cord_data = JSON.parse(localStorage.getItem(`${id}_cord`));

    if(cord_data){
      this.setState({
        translateX: cord_data.clientX,
        translateY: cord_data.clientY,
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseDown = ({ clientX, clientY }) => {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);

    if (this.props.onDragStart) {
      this.props.onDragStart();
    }

    this.setState({
      originalX: clientX,
      originalY: clientY,
      isDragging: true
    });
  };

  handleMouseMove = ({ clientX, clientY }) => {
    const { isDragging } = this.state;
    const { onDrag } = this.props;

    if (!isDragging) {
      return;
    }

    this.setState(prevState => ({
      translateX: clientX - prevState.originalX + prevState.lastTranslateX,
      translateY: clientY - prevState.originalY + prevState.lastTranslateY
    }), () => {
      if (onDrag) {
        onDrag({
          translateX: this.state.translateX,
          translateY: this.state.translateY
        });
      }
    });
  };


  handleMouseUp = () => {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);

    const {id, storeCord} = this.props;
    const {translateX, translateY} = this.state;
    const curr_cord = {
      'id': id,
      'clientX': translateX,
      'clientY': translateY
    }
    
    storeCord(id,curr_cord);

    this.setState(
      {
        originalX: 0,
        originalY: 0,
        lastTranslateX: translateX,
        lastTranslateY: translateY,

        isDragging: false
      },
      () => {
        if (this.props.onDragEnd) {
          this.props.onDragEnd();
        }
      }
    );
  };

  render() {
    const { children, justify } = this.props;
    const { translateX, translateY, isDragging } = this.state;

    return (
      <Container
        onMouseDown={this.handleMouseDown}
        x={translateX}
        y={translateY}
        justify={justify}
        isDragging={isDragging}
      >
        {children}
      </Container>
    );
  }
}
