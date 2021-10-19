import React, { FC } from 'react';
import { Container, TContainer, TSizes } from '..';

export interface ContainerMainProps {
  tag: 'div' | 'section'
  background: 'black' | 'white' | 'grey'
  paddingSize: TSizes
  id?: string
}

export const ContainerMain: FC<ContainerMainProps> = ({
  tag,
  background,
  paddingSize,
  id,
}) => {

  const traits: TContainer['traits'] = {
    tag,
    attributes: {
      id,
    },
    styles: {
      colorBackground: background,
      padding: { size: paddingSize, direction: 'all' }
    }
  }

  return <Container traits={traits}> CONTAINER PATTERN </Container>

}