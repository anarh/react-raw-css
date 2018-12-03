// Library imports
import React from 'react';
import renderer from 'react-test-renderer';

// Component import
import Icon from './';

// Icon Low
const iconLowMock = renderer.create(<Icon name="search" resolution="low" />).toJSON();
const iconLowChild = iconLowMock.children[0];

describe('Icon: Low Resolution', () => {
  test('Icon child: Parent element toEqual "svg"', () => {
    expect(iconLowMock.type).toEqual('svg');
  });

  test('Icon child: Prop aria-hidden toBeTruthy', () => {
    expect(iconLowMock.props['aria-hidden']).toBeTruthy();
  });

  test('Icon child: Prop class-name toBe  "visa-ui-icon--low"', () => {
    expect(iconLowMock.props.className).toBe('visa-ui-icon--low');
  });

  test('Icon child: Prop view-box toBe  "0 0 24 24"', () => {
    expect(iconLowMock.props.viewBox).toEqual('0 0 24 24');
  });

  test('Icon child: Prop focusable: toBe "false"', () => {
    expect(iconLowMock.props.focusable).toBe('false');
  });

  test('Icon child: Prop tabIndex: toBe -1', () => {
    expect(iconLowMock.props.tabIndex).toBe(-1);
  });

  test('Icon child - child: Parent element toEqual "use"', () => {
    expect(iconLowChild.type).toBe('use');
  });

  test('Icon child - child: Prop href toBe "#search--low"', () => {
    expect(iconLowChild.props.href).toBe('#search--low');
  });

  test('Icon child - child: Prop xlinkHref toBe "#search--low"', () => {
    expect(iconLowChild.props.xlinkHref).toBe('#search--low');
  });
  expect(iconLowMock).toMatchSnapshot();
});

// Icon High
const iconHighMock = renderer.create(<Icon name="search" resolution="high" />).toJSON();
const iconHighChild = iconHighMock.children[0];

describe('Icon: High Resolution', () => {
  test('Icon child: Prop class-name toBe  "visa-ui-icon--high"', () => {
    expect(iconHighMock.props.className).toBe('visa-ui-icon--high');
  });

  test('Icon child: Prop view-box toBe  "0 0 24 24"', () => {
    expect(iconHighMock.props.viewBox).toEqual('0 0 48 48');
  });

  test('Icon child - child: Prop href toBe "#search--high"', () => {
    expect(iconHighChild.props.href).toBe('#search--high');
  });

  test('Icon child - child: Prop xlinkHref toBe "#search--high"', () => {
    expect(iconHighChild.props.xlinkHref).toBe('#search--high');
  });
  expect(iconHighMock).toMatchSnapshot();
});

// Icon Tiny
const iconTinyMock = renderer.create(<Icon name="search" resolution="tiny" />).toJSON();
const iconTinyChild = iconTinyMock.children[0];

describe('Icon: Tiny Resolution', () => {
  test('Icon child: Prop class-name toBe  "visa-ui-icon--tiny"', () => {
    expect(iconTinyMock.props.className).toBe('visa-ui-icon--tiny');
  });

  test('Icon child: Prop view-box toBe  "0 0 24 24"', () => {
    expect(iconTinyMock.props.viewBox).toEqual('0 0 16 16');
  });

  test('Icon child - child: Prop href toBe "#search--tiny"', () => {
    expect(iconTinyChild.props.href).toBe('#search--tiny');
  });

  test('Icon child - child: Prop xlinkHref toBe "#search--tiny"', () => {
    expect(iconTinyChild.props.xlinkHref).toBe('#search--tiny');
  });
  expect(iconTinyMock).toMatchSnapshot();
});
