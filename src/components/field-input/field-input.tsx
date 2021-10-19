// import React, { forwardRef } from 'react';
// import { style } from 'typestyle';
// import { ILabel, Label } from '../label';
// import { mixinFill } from '../../styles/general';
// import { TextAlert } from '../text/text-alert';
// import { FieldRootInput } from './field-root-input';
// import { IFieldRootInput, ITraitFieldText } from './fields.interface';
// import {
//   mixinFlex,
//   mixinFlexOrder0,
//   mixinFlexOrder1,
//   mixinFlexOrder2,
//   mixinFlexAuto,
//   mixinFlexDirection,
// } from '../../styles/grid';

// export const FieldText = forwardRef<HTMLInputElement, ITraitFieldText>(
//   ({ traits }, ref) => {

//     const {
//       for: _for,
//       injectCSS,
//       isDisabled,
//       isInvalid,
//       isRequired,
//       traitLabel: _traitLabel,
//       traitFieldText: _traitField,
//       traitTextAlert: _traitTextAlert,
//     } = traits;

//     const cssCore = style(
//       mixinFlex,
//       mixinFlexDirection('column'),
//       mixinFill(100),
//       !!injectCSS && injectCSS
//     );

//     const traitLabel: ILabel = {
//       ..._traitLabel,
//       isRequired,
//       for: _for,
//       injectCSS: {
//         ..._traitLabel.injectCSS && _traitLabel.injectCSS,
//         ...mixinFlexAuto(1),
//         ...mixinFlexOrder0,
//       },
//     };

//     const traitField: IFieldRootInput = {
//       ..._traitField,
//       isRequired,
//       isDisabled,
//       isInvalid,
//       id: _for,
//       injectCSS: {
//         ..._traitField.injectCSS && _traitField.injectCSS,
//         ...mixinFlexAuto(1),
//         ...mixinFlexOrder1,
//       },
//     };

//     return (
//       <div className={cssCore}>
//         <FieldRootInput traits={traitField} ref={ref} />
//         <Label traits={traitLabel} />
//         {
//           isInvalid && _traitTextAlert && _traitTextAlert.text && (
//             <TextAlert
//               traits={{
//                 ..._traitTextAlert,
//                 injectCSS: {
//                   ...mixinFlexAuto(1),
//                   ...mixinFlexOrder2,
//                 },
//               }}
//             />
//           )
//         }
//       </div>
//     );
//   }
// );
