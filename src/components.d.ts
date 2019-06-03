/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Event,
} from '@stencil/core';
import {
  OgDatatableConfig,
} from './components/og-datatable/interfaces/og-datatable-column-def';


export namespace Components {
  interface OgButton {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * The label of the button
    */
    'label': string;
  }
  interface OgCard {
    /**
    * The title for this card (optional)
    */
    'name': string;
  }
  interface OgCheckbox {
    /**
    * The value of the checkbox
    */
    'checked': boolean;
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * The label of the checkbox
    */
    'label': string;
  }
  interface OgCombobox {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * Set the property for the items to define as label. Default: "label"
    */
    'itemLabelProperty': string;
    /**
    * Set the property for the items to define as value. Default: "value"
    */
    'itemValueProperty': string;
    /**
    * An array of items to choose from
    */
    'items': any[];
    /**
    * Optional placeholder if no value is selected.
    */
    'placeholder'?: string;
    /**
    * The selected value of the combobox
    */
    'value': string;
  }
  interface OgConfirmDialog {
    /**
    * Label for cancel button.
    */
    'cancelLabel': string;
    /**
    * Label for confirmation button.
    */
    'confirmLabel': string;
    /**
    * The title for this modal dialog
    */
    'name': string;
    /**
    * Optional SVG Icon as markup.
    */
    'svgIcon': string;
    /**
    * Visibility state of this dialog.
    */
    'visible': boolean;
  }
  interface OgDatatable {
    /**
    * Table configuration (type OgDatatableConfig)
    */
    'config': OgDatatableConfig;
    /**
    * Triggers a reload of the table data.
    */
    'reloadData': () => Promise<void>;
    /**
    * Selected row identified by id-property
    */
    'selected': any;
    /**
    * Programatically update selected row by idProperty.
    */
    'setSelection': (id: any) => Promise<void>;
  }
  interface OgDialog {
    /**
    * The title for this modal dialog.
    */
    'name': string;
    /**
    * SVG markup that can be styled by orgenic themes.
    */
    'svgIcon': string;
    /**
    * Visibility state of this dialog.
    */
    'visible': boolean;
  }
  interface OgExpander {
    /**
    * Sets or unsets the expanded state.
    */
    'expanded': boolean;
    /**
    * Optional group identifier for this expander. Expanders with same group will behave like an accordion, opening one expander will close other expanders.
    */
    'group': string;
    /**
    * The name for this expander
    */
    'name': string;
    /**
    * Use this method to toggle expanded state. Group property is respected when calling this method.
    */
    'toggleExpandedState': () => Promise<void>;
  }
  interface OgFormItem {
    'disabled': boolean;
    /**
    * The label for the form item
    */
    'label': string;
  }
  interface OgList {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * Set the property for the items to define as disabled. Default: 'disabled'
    */
    'disabledProperty': string;
    /**
    * Set the that will be displayed if the items array is empty.
    */
    'emptyListMessage': string;
    /**
    * Set the property for the items to define as image url. *Optional* Default: no image
    */
    'imageUrlProperty'?: string;
    /**
    * An array of items to choose from
    */
    'items': any[];
    /**
    * Set the property for the items to define as value. Default: 'key'
    */
    'keyProperty': string;
    /**
    * Set the property for the items to define as label. Default: 'label'
    */
    'labelProperty': string;
    /**
    * The key of the selected list item
    */
    'selected': string;
    /**
    * Set the property for the items to define as value. *Optional* Default: no value
    */
    'valueProperty': string;
  }
  interface OgListItem {
    /**
    * Set the url of the image to be shown in the placeholder
    */
    'image': string;
    /**
    * Set the flag, it this list item is in disabled state.
    */
    'isDisabled': boolean;
    /**
    * Set the flag, if this list item is in selected state.
    */
    'isSelected': boolean;
    /**
    * The value is needed for the using @see OgList instance to correctly handle selection.
    */
    'key': any;
    /**
    * Sets the value of the label.
    */
    'label': string;
    /**
    * Set flag, if place for an image is reserved, wheather used or not.
    */
    'showImage': boolean;
    /**
    * Set flag, if place for a value bage is reserved wheather used or not
    */
    'showValue': boolean;
    /**
    * Set the value to be shown in the badge placeholder
    */
    'value': string;
  }
  interface OgMessageDialog {
    /**
    * Label for approve button.
    */
    'approveLabel': string;
    /**
    * The title for this modal dialog
    */
    'name': string;
    /**
    * Optional SVG Icon as markup.
    */
    'svgIcon': string;
    /**
    * Dialog type can be: success / warning / error / info with. An icon as well as the icon color will be automatically assigned.
    */
    'type': 'success' | 'warning' | 'error' | 'info';
    /**
    * Visibility state of this dialog.
    */
    'visible': boolean;
  }
  interface OgNumberInput {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled': boolean;
    /**
    * Maximum value for this component.
    */
    'max': number;
    /**
    * Minimum value for this component.
    */
    'min': number;
    /**
    * Optional placeholder text if input is empty.
    */
    'placeholder'?: string;
    /**
    * Increment or decrement steps for the value.
    */
    'step': number;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value': number;
  }
  interface OgPasswordInput {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled': boolean;
    /**
    * Optional placeholder text if input is empty.
    */
    'placeholder'?: string;
    /**
    * Define, whether a switch should be visible, to show the password in plain text.
    */
    'showTogglePasswordVisibility': boolean;
    'togglePasswordVisibility': () => Promise<void>;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value': string;
  }
  interface OgRadioButton {
    /**
    * Determines, whether the radio button is checked or not
    */
    'checked': boolean;
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * Determines, whether the control is disabled from the parent group
    */
    'groupDisabled': boolean;
    /**
    * The label of the radio button
    */
    'label': string;
    /**
    * The name of the radio button. All radio buttons with the same name belong to one group.
    */
    'name': string;
    /**
    * The value of the radio button that is set to the parent group if radio button is selected
    */
    'value': string;
  }
  interface OgRadioButtonGroup {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * name for the radiobuttons within this group
    */
    'name': string;
    /**
    * The value of the selected radio button.
    */
    'value': string;
  }
  interface OgTab {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * The label of the tab
    */
    'label': string;
    'selected': boolean;
  }
  interface OgTabContainer {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    'openTab': (index: number) => Promise<void>;
  }
  interface OgTextInput {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled': boolean;
    /**
    * Optional placeholder text if input is empty.
    */
    'placeholder'?: string;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value': string;
  }
  interface OgTextarea {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled': boolean;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value': string;
  }
  interface OgToggleSwitch {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * The value of the toggle-switch
    */
    'value': boolean;
  }
}

declare global {


  interface HTMLOgButtonElement extends Components.OgButton, HTMLStencilElement {}
  var HTMLOgButtonElement: {
    prototype: HTMLOgButtonElement;
    new (): HTMLOgButtonElement;
  };

  interface HTMLOgCardElement extends Components.OgCard, HTMLStencilElement {}
  var HTMLOgCardElement: {
    prototype: HTMLOgCardElement;
    new (): HTMLOgCardElement;
  };

  interface HTMLOgCheckboxElement extends Components.OgCheckbox, HTMLStencilElement {}
  var HTMLOgCheckboxElement: {
    prototype: HTMLOgCheckboxElement;
    new (): HTMLOgCheckboxElement;
  };

  interface HTMLOgComboboxElement extends Components.OgCombobox, HTMLStencilElement {}
  var HTMLOgComboboxElement: {
    prototype: HTMLOgComboboxElement;
    new (): HTMLOgComboboxElement;
  };

  interface HTMLOgConfirmDialogElement extends Components.OgConfirmDialog, HTMLStencilElement {}
  var HTMLOgConfirmDialogElement: {
    prototype: HTMLOgConfirmDialogElement;
    new (): HTMLOgConfirmDialogElement;
  };

  interface HTMLOgDatatableElement extends Components.OgDatatable, HTMLStencilElement {}
  var HTMLOgDatatableElement: {
    prototype: HTMLOgDatatableElement;
    new (): HTMLOgDatatableElement;
  };

  interface HTMLOgDialogElement extends Components.OgDialog, HTMLStencilElement {}
  var HTMLOgDialogElement: {
    prototype: HTMLOgDialogElement;
    new (): HTMLOgDialogElement;
  };

  interface HTMLOgExpanderElement extends Components.OgExpander, HTMLStencilElement {}
  var HTMLOgExpanderElement: {
    prototype: HTMLOgExpanderElement;
    new (): HTMLOgExpanderElement;
  };

  interface HTMLOgFormItemElement extends Components.OgFormItem, HTMLStencilElement {}
  var HTMLOgFormItemElement: {
    prototype: HTMLOgFormItemElement;
    new (): HTMLOgFormItemElement;
  };

  interface HTMLOgListElement extends Components.OgList, HTMLStencilElement {}
  var HTMLOgListElement: {
    prototype: HTMLOgListElement;
    new (): HTMLOgListElement;
  };

  interface HTMLOgListItemElement extends Components.OgListItem, HTMLStencilElement {}
  var HTMLOgListItemElement: {
    prototype: HTMLOgListItemElement;
    new (): HTMLOgListItemElement;
  };

  interface HTMLOgMessageDialogElement extends Components.OgMessageDialog, HTMLStencilElement {}
  var HTMLOgMessageDialogElement: {
    prototype: HTMLOgMessageDialogElement;
    new (): HTMLOgMessageDialogElement;
  };

  interface HTMLOgNumberInputElement extends Components.OgNumberInput, HTMLStencilElement {}
  var HTMLOgNumberInputElement: {
    prototype: HTMLOgNumberInputElement;
    new (): HTMLOgNumberInputElement;
  };

  interface HTMLOgPasswordInputElement extends Components.OgPasswordInput, HTMLStencilElement {}
  var HTMLOgPasswordInputElement: {
    prototype: HTMLOgPasswordInputElement;
    new (): HTMLOgPasswordInputElement;
  };

  interface HTMLOgRadioButtonElement extends Components.OgRadioButton, HTMLStencilElement {}
  var HTMLOgRadioButtonElement: {
    prototype: HTMLOgRadioButtonElement;
    new (): HTMLOgRadioButtonElement;
  };

  interface HTMLOgRadioButtonGroupElement extends Components.OgRadioButtonGroup, HTMLStencilElement {}
  var HTMLOgRadioButtonGroupElement: {
    prototype: HTMLOgRadioButtonGroupElement;
    new (): HTMLOgRadioButtonGroupElement;
  };

  interface HTMLOgTabElement extends Components.OgTab, HTMLStencilElement {}
  var HTMLOgTabElement: {
    prototype: HTMLOgTabElement;
    new (): HTMLOgTabElement;
  };

  interface HTMLOgTabContainerElement extends Components.OgTabContainer, HTMLStencilElement {}
  var HTMLOgTabContainerElement: {
    prototype: HTMLOgTabContainerElement;
    new (): HTMLOgTabContainerElement;
  };

  interface HTMLOgTextInputElement extends Components.OgTextInput, HTMLStencilElement {}
  var HTMLOgTextInputElement: {
    prototype: HTMLOgTextInputElement;
    new (): HTMLOgTextInputElement;
  };

  interface HTMLOgTextareaElement extends Components.OgTextarea, HTMLStencilElement {}
  var HTMLOgTextareaElement: {
    prototype: HTMLOgTextareaElement;
    new (): HTMLOgTextareaElement;
  };

  interface HTMLOgToggleSwitchElement extends Components.OgToggleSwitch, HTMLStencilElement {}
  var HTMLOgToggleSwitchElement: {
    prototype: HTMLOgToggleSwitchElement;
    new (): HTMLOgToggleSwitchElement;
  };
  interface HTMLElementTagNameMap {
    'og-button': HTMLOgButtonElement;
    'og-card': HTMLOgCardElement;
    'og-checkbox': HTMLOgCheckboxElement;
    'og-combobox': HTMLOgComboboxElement;
    'og-confirm-dialog': HTMLOgConfirmDialogElement;
    'og-datatable': HTMLOgDatatableElement;
    'og-dialog': HTMLOgDialogElement;
    'og-expander': HTMLOgExpanderElement;
    'og-form-item': HTMLOgFormItemElement;
    'og-list': HTMLOgListElement;
    'og-list-item': HTMLOgListItemElement;
    'og-message-dialog': HTMLOgMessageDialogElement;
    'og-number-input': HTMLOgNumberInputElement;
    'og-password-input': HTMLOgPasswordInputElement;
    'og-radio-button': HTMLOgRadioButtonElement;
    'og-radio-button-group': HTMLOgRadioButtonGroupElement;
    'og-tab': HTMLOgTabElement;
    'og-tab-container': HTMLOgTabContainerElement;
    'og-text-input': HTMLOgTextInputElement;
    'og-textarea': HTMLOgTextareaElement;
    'og-toggle-switch': HTMLOgToggleSwitchElement;
  }
}

declare namespace LocalJSX {
  interface OgButton extends JSXBase.HTMLAttributes<HTMLOgButtonElement> {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * The label of the button
    */
    'label'?: string;
    /**
    * Event is being emitted when value changes.
    */
    'onClicked'?: (event: CustomEvent<Event>) => void;
  }
  interface OgCard extends JSXBase.HTMLAttributes<HTMLOgCardElement> {
    /**
    * The title for this card (optional)
    */
    'name'?: string;
  }
  interface OgCheckbox extends JSXBase.HTMLAttributes<HTMLOgCheckboxElement> {
    /**
    * The value of the checkbox
    */
    'checked'?: boolean;
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * The label of the checkbox
    */
    'label'?: string;
    /**
    * Event is being emitted when value changes.
    */
    'onChanged'?: (event: CustomEvent<MouseEvent>) => void;
  }
  interface OgCombobox extends JSXBase.HTMLAttributes<HTMLOgComboboxElement> {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * Set the property for the items to define as label. Default: "label"
    */
    'itemLabelProperty'?: string;
    /**
    * Set the property for the items to define as value. Default: "value"
    */
    'itemValueProperty'?: string;
    /**
    * An array of items to choose from
    */
    'items'?: any[];
    /**
    * Event is being emitted when value changes.
    */
    'onItemSelected'?: (event: CustomEvent<any>) => void;
    /**
    * Optional placeholder if no value is selected.
    */
    'placeholder'?: string;
    /**
    * The selected value of the combobox
    */
    'value'?: string;
  }
  interface OgConfirmDialog extends JSXBase.HTMLAttributes<HTMLOgConfirmDialogElement> {
    /**
    * Label for cancel button.
    */
    'cancelLabel'?: string;
    /**
    * Label for confirmation button.
    */
    'confirmLabel'?: string;
    /**
    * The title for this modal dialog
    */
    'name'?: string;
    /**
    * Event is being emitted when value changes.
    */
    'onCancelled'?: (event: CustomEvent<Event>) => void;
    /**
    * Event is being emitted when value changes.
    */
    'onConfirmed'?: (event: CustomEvent<Event>) => void;
    /**
    * Optional SVG Icon as markup.
    */
    'svgIcon'?: string;
    /**
    * Visibility state of this dialog.
    */
    'visible'?: boolean;
  }
  interface OgDatatable extends JSXBase.HTMLAttributes<HTMLOgDatatableElement> {
    /**
    * Table configuration (type OgDatatableConfig)
    */
    'config'?: OgDatatableConfig;
    /**
    * Item selection event. Event.detail contains selected item.
    */
    'onItemSelected'?: (event: CustomEvent<any>) => void;
    /**
    * Selected row identified by id-property
    */
    'selected'?: any;
  }
  interface OgDialog extends JSXBase.HTMLAttributes<HTMLOgDialogElement> {
    /**
    * The title for this modal dialog.
    */
    'name'?: string;
    /**
    * SVG markup that can be styled by orgenic themes.
    */
    'svgIcon'?: string;
    /**
    * Visibility state of this dialog.
    */
    'visible'?: boolean;
  }
  interface OgExpander extends JSXBase.HTMLAttributes<HTMLOgExpanderElement> {
    /**
    * Sets or unsets the expanded state.
    */
    'expanded'?: boolean;
    /**
    * Optional group identifier for this expander. Expanders with same group will behave like an accordion, opening one expander will close other expanders.
    */
    'group'?: string;
    /**
    * The name for this expander
    */
    'name'?: string;
  }
  interface OgFormItem extends JSXBase.HTMLAttributes<HTMLOgFormItemElement> {
    'disabled'?: boolean;
    /**
    * The label for the form item
    */
    'label'?: string;
  }
  interface OgList extends JSXBase.HTMLAttributes<HTMLOgListElement> {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * Set the property for the items to define as disabled. Default: 'disabled'
    */
    'disabledProperty'?: string;
    /**
    * Set the that will be displayed if the items array is empty.
    */
    'emptyListMessage'?: string;
    /**
    * Set the property for the items to define as image url. *Optional* Default: no image
    */
    'imageUrlProperty'?: string;
    /**
    * An array of items to choose from
    */
    'items'?: any[];
    /**
    * Set the property for the items to define as value. Default: 'key'
    */
    'keyProperty'?: string;
    /**
    * Set the property for the items to define as label. Default: 'label'
    */
    'labelProperty'?: string;
    /**
    * Event is being emitted when value changes.
    */
    'onItemSelected'?: (event: CustomEvent<any>) => void;
    /**
    * The key of the selected list item
    */
    'selected'?: string;
    /**
    * Set the property for the items to define as value. *Optional* Default: no value
    */
    'valueProperty'?: string;
  }
  interface OgListItem extends JSXBase.HTMLAttributes<HTMLOgListItemElement> {
    /**
    * Set the url of the image to be shown in the placeholder
    */
    'image'?: string;
    /**
    * Set the flag, it this list item is in disabled state.
    */
    'isDisabled'?: boolean;
    /**
    * Set the flag, if this list item is in selected state.
    */
    'isSelected'?: boolean;
    /**
    * The value is needed for the using @see OgList instance to correctly handle selection.
    */
    'key'?: any;
    /**
    * Sets the value of the label.
    */
    'label'?: string;
    /**
    * Set flag, if place for an image is reserved, wheather used or not.
    */
    'showImage'?: boolean;
    /**
    * Set flag, if place for a value bage is reserved wheather used or not
    */
    'showValue'?: boolean;
    /**
    * Set the value to be shown in the badge placeholder
    */
    'value'?: string;
  }
  interface OgMessageDialog extends JSXBase.HTMLAttributes<HTMLOgMessageDialogElement> {
    /**
    * Label for approve button.
    */
    'approveLabel'?: string;
    /**
    * The title for this modal dialog
    */
    'name'?: string;
    /**
    * Event is being emitted when value changes.
    */
    'onConfirmed'?: (event: CustomEvent<Event>) => void;
    /**
    * Optional SVG Icon as markup.
    */
    'svgIcon'?: string;
    /**
    * Dialog type can be: success / warning / error / info with. An icon as well as the icon color will be automatically assigned.
    */
    'type'?: 'success' | 'warning' | 'error' | 'info';
    /**
    * Visibility state of this dialog.
    */
    'visible'?: boolean;
  }
  interface OgNumberInput extends JSXBase.HTMLAttributes<HTMLOgNumberInputElement> {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled'?: boolean;
    /**
    * Maximum value for this component.
    */
    'max'?: number;
    /**
    * Minimum value for this component.
    */
    'min'?: number;
    /**
    * Event is being emitted when input gets focus..
    */
    'onFocusGained'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when focus gets lost.
    */
    'onFocusLost'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when value changes.
    */
    'onValueChanged'?: (event: CustomEvent<number>) => void;
    /**
    * Optional placeholder text if input is empty.
    */
    'placeholder'?: string;
    /**
    * Increment or decrement steps for the value.
    */
    'step'?: number;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value'?: number;
  }
  interface OgPasswordInput extends JSXBase.HTMLAttributes<HTMLOgPasswordInputElement> {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled'?: boolean;
    /**
    * Event is being emitted when input gets focus..
    */
    'onFocusGained'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when focus gets lost.
    */
    'onFocusLost'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when value changes.
    */
    'onValueChanged'?: (event: CustomEvent<string>) => void;
    /**
    * Optional placeholder text if input is empty.
    */
    'placeholder'?: string;
    /**
    * Define, whether a switch should be visible, to show the password in plain text.
    */
    'showTogglePasswordVisibility'?: boolean;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value'?: string;
  }
  interface OgRadioButton extends JSXBase.HTMLAttributes<HTMLOgRadioButtonElement> {
    /**
    * Determines, whether the radio button is checked or not
    */
    'checked'?: boolean;
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * Determines, whether the control is disabled from the parent group
    */
    'groupDisabled'?: boolean;
    /**
    * The label of the radio button
    */
    'label'?: string;
    /**
    * The name of the radio button. All radio buttons with the same name belong to one group.
    */
    'name'?: string;
    'onChanged'?: (event: CustomEvent<MouseEvent>) => void;
    /**
    * The value of the radio button that is set to the parent group if radio button is selected
    */
    'value'?: string;
  }
  interface OgRadioButtonGroup extends JSXBase.HTMLAttributes<HTMLOgRadioButtonGroupElement> {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * name for the radiobuttons within this group
    */
    'name'?: string;
    'onValueChanged'?: (event: CustomEvent<string>) => void;
    /**
    * The value of the selected radio button.
    */
    'value'?: string;
  }
  interface OgTab extends JSXBase.HTMLAttributes<HTMLOgTabElement> {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * The label of the tab
    */
    'label'?: string;
    'selected'?: boolean;
  }
  interface OgTabContainer extends JSXBase.HTMLAttributes<HTMLOgTabContainerElement> {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * Event is being emitted when value changes.
    */
    'onTabSelected'?: (event: CustomEvent<number>) => void;
  }
  interface OgTextInput extends JSXBase.HTMLAttributes<HTMLOgTextInputElement> {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled'?: boolean;
    /**
    * Event is being emitted when input gets focus..
    */
    'onFocusGained'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when focus gets lost.
    */
    'onFocusLost'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when value changes.
    */
    'onValueChanged'?: (event: CustomEvent<string>) => void;
    /**
    * Optional placeholder text if input is empty.
    */
    'placeholder'?: string;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value'?: string;
  }
  interface OgTextarea extends JSXBase.HTMLAttributes<HTMLOgTextareaElement> {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled'?: boolean;
    /**
    * Event is being emitted when input gets focus.
    */
    'onFocusGained'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when focus gets lost.
    */
    'onFocusLost'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when value changes.
    */
    'onValueChanged'?: (event: CustomEvent<string>) => void;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value'?: string;
  }
  interface OgToggleSwitch extends JSXBase.HTMLAttributes<HTMLOgToggleSwitchElement> {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * Event is being emitted when value changes.
    */
    'onChanged'?: (event: CustomEvent<MouseEvent>) => void;
    /**
    * The value of the toggle-switch
    */
    'value'?: boolean;
  }

  interface IntrinsicElements {
    'og-button': OgButton;
    'og-card': OgCard;
    'og-checkbox': OgCheckbox;
    'og-combobox': OgCombobox;
    'og-confirm-dialog': OgConfirmDialog;
    'og-datatable': OgDatatable;
    'og-dialog': OgDialog;
    'og-expander': OgExpander;
    'og-form-item': OgFormItem;
    'og-list': OgList;
    'og-list-item': OgListItem;
    'og-message-dialog': OgMessageDialog;
    'og-number-input': OgNumberInput;
    'og-password-input': OgPasswordInput;
    'og-radio-button': OgRadioButton;
    'og-radio-button-group': OgRadioButtonGroup;
    'og-tab': OgTab;
    'og-tab-container': OgTabContainer;
    'og-text-input': OgTextInput;
    'og-textarea': OgTextarea;
    'og-toggle-switch': OgToggleSwitch;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


