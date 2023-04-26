import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbBotaoProps, AbButton } from '../src/';

export default {
  title: 'Componentes/AbButton',
  component: AbButton,
} as ComponentMeta<typeof AbButton>;

const Template: ComponentStory<typeof AbButton> = args => (
  <AbButton {...args} />
);

export const Primario = Template.bind({});

Primario.args = {
  texto: 'Ab Botão Primário',
  tipo: 'primario',
} as AbBotaoProps;

export const Secundario = Template.bind({});

Secundario.args = {
  texto: 'Ab Botão Secundário',
  tipo: 'secundario',
} as AbBotaoProps;
