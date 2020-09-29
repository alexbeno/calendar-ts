import styled from 'styled-components';
import theme from 'theme';

interface ContainerProps {
  className?: string;
  xl?: string;
  lg?: string;
  xmd?: string;
  md?: string;
  sm?: string;
  mdlg?: string;
}

interface RenderWParams {
  xl?: string;
  lg?: string;
  xmd?: string;
  md?: string;
  sm?: string;
  mdlg?: string;
}

/* ---------------------------------- MARGIN BOTTOM --------------------------------- */

const renderDefault = (params: RenderWParams) => {
  if (params.xl) {
    return `${params.xl}px`;
  }

  if (params.lg) {
    return `${params.lg}px`;
  }

  if (params.mdlg) {
    return `${params.mdlg}px`;
  }

  if (params.xmd) {
    return `${params.xmd}px`;
  }

  if (params.md) {
    return `${params.md}px`;
  }

  if (params.sm) {
    return `${params.sm}px`;
  }

  return false;
};

const renderLg = (params: RenderWParams) => {
  if (params.lg) {
    return `${params.lg}px`;
  }

  return false;
};

const renderMdlg = (params: RenderWParams) => {
  if (params.mdlg) {
    return `${params.mdlg}px`;
  }

  return false;
};

const renderXmd = (params: RenderWParams) => {
  if (params.xmd) {
    return `${params.xmd}px`;
  }

  return false;
};

const renderMd = (params: RenderWParams) => {
  if (params.md) {
    return `${params.md}px`;
  }

  return false;
};

const renderSm = (params: RenderWParams) => {
  if (params.sm) {
    return `${params.sm}px`;
  }

  return false;
};

export const Container = styled('div')<ContainerProps>`
  height: ${props =>
    renderDefault({
      xl: props.xl,
      lg: props.lg,
      mdlg: props.mdlg,
      xmd: props.xmd,
      md: props.md,
      sm: props.sm,
    })};

  @media (max-width: ${theme.break.lg}) {
    height: ${props =>
    renderLg({
      lg: props.lg,
    })};
  }

  @media (max-width: ${theme.break.lg}) {
    height: ${props =>
    renderMdlg({
      mdlg: props.mdlg,
    })};
  }

  @media (max-width: ${theme.break.xmd}) {
    height: ${props =>
    renderXmd({
      xmd: props.xmd,
    })};
  }
  @media (max-width: ${theme.break.md}) {
    height: ${props =>
    renderMd({
      md: props.md,
    })};
  }

  @media (max-width: ${theme.break.sm}) {
    height: ${props =>
    renderSm({
      sm: props.sm,
    })};
  }
`;
