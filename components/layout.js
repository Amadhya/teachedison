import styled, { css } from 'styled-components';
import {Row as FlexRow, Col as FlexCol} from 'react-styled-flexboxgrid';

import Layout from "../constants/layout";

export const Col=styled(FlexCol)`
    text-align: ${({align})=> align};
    ${({auto})=> auto && css `
        flex: 1;
    `};
    ${({margin})=> margin && css `
        margin: auto;
    `};
    ${({flex})=> flex && css `
        display: flex !important;
    `};
    flex-direction: ${({reverse})=> (reverse ? 'column' : 'row')};
    ${({alignItems})=> alignItems && css `
        align-items: ${alignItems};
    `};
    ${({justify})=> justify && css `
        justify-content: ${justify};
    `};
    padding: ${({gap}) => gap*Layout.GAP || 0}rem ${({gutter}) => gutter*Layout.GUTTER || 0}rem !important;
`;

export const Row=styled(FlexRow)`
    text-align: ${({align})=> align};
    ${({auto})=> auto && css `
        flex: 1;
    `};
    ${({alignItems})=> alignItems && css `
        align-items: ${alignItems};
    `};
    ${({justify})=> justify && css `
        justify-content: ${justify};
    `};
    margin: 0px;
    flex-direction: ${({reverse})=> (reverse ? 'row-reverse' : 'row')};
    width: 100% !important;
    padding: ${({gap}) => gap*Layout.GAP || 0}rem ${({gutter}) => gutter*Layout.GUTTER || 0}rem !important;
    background: white;
`;

export const FlexView=styled.div`
    display: flex;
    flex-direction: ${({reverse})=> (reverse ? 'column' : 'row')};
    ${({wrap})=> wrap && css `
        flex-wrap: wrap;
    `};
    ${({alignItems})=> alignItems && css `
        align-items: ${alignItems};
    `};
    ${({justify})=> justify && css `
        justify-content: ${justify};
    `};
    padding: ${({gap}) => gap*Layout.GAP || 0}rem ${({gutter}) => gutter*Layout.GUTTER || 0}rem !important;
`;

export const Separator = styled.div`
    height: ${({height}) => height*1 || 1}rem;
`;