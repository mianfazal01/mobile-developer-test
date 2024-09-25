import { COLORS } from "@/assets/colors";
import { hp } from "@/utils/responsive";
import React from "react";
import {
  Text,
  TextInput,
  View,
  TextInputProps,
  StyleProp,
  TextStyle,
  ViewStyle,
  StyleSheet,
} from "react-native";

interface FormInputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  label?: string;
  placeholder?: string;
  inputStyle?: StyleProp<TextStyle>;
  prependComponent?: React.ReactNode;
  appendComponent?: React.ReactNode;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: TextInputProps["keyboardType"];
  autoCompleteType?: TextInputProps["autoCompleteType"];
  autoCapitalize?: TextInputProps["autoCapitalize"];
  errorMsg?: string;
  value?: string;
  input?: StyleProp<ViewStyle>;
  maxLength?: number;
  labelTextStyle?: StyleProp<TextStyle>;
  errorTextStyle?: StyleProp<TextStyle>;
  placeholderTextColor?: string;
  onChange?: (e: any) => void;
  editable?: boolean;
  autoFocus?: boolean;
  bottomText?: string;
  onFocus?: () => void;
  returnKeyType?: TextInputProps["returnKeyType"];
  defaultValue?: string;
  onSubmitEditing?: () => void;
  onEndEditing?: () => void;
  labelViewStyle?: StyleProp<ViewStyle>;
  innerRef?: React.LegacyRef<TextInput>;
  multiline?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  containerStyle,
  label,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  onChangeText,
  secureTextEntry,
  keyboardType = "default",
  autoCompleteType = "off",
  autoCapitalize = "none",
  errorMsg = "",
  value,
  input,
  maxLength,
  labelTextStyle,
  errorTextStyle,
  placeholderTextColor,
  onChange,
  editable,
  autoFocus,
  bottomText,
  onFocus,
  returnKeyType,
  defaultValue,
  onSubmitEditing,
  onEndEditing,
  labelViewStyle,
  innerRef,
  multiline,
}) => {
  return (
    <View style={containerStyle as ViewStyle}>
      {/* label & error msg */}
      <View style={[styles.labelView, labelViewStyle]}>
        <Text style={[styles.labelText, labelTextStyle]}>{label}</Text>
      </View>
      {/* Text Input */}
      <View style={[styles.inputView, input]}>
        {prependComponent}

        <TextInput
          style={[styles.inputTextStyle, inputStyle as TextStyle]}
          placeholder={placeholder}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : COLORS.lightBrown
          }
          onSubmitEditing={onSubmitEditing}
          defaultValue={defaultValue}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          onChangeText={onChangeText}
          value={value}
          maxLength={maxLength}
          onChange={onChange}
          editable={editable}
          autoFocus={autoFocus}
          onFocus={onFocus}
          returnKeyType={returnKeyType}
          onEndEditing={onEndEditing}
          ref={innerRef}
          multiline={multiline}
        />

        {appendComponent}
      </View>

      <Text style={[styles.errorText, errorTextStyle]}>{errorMsg}</Text>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  labelView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  labelText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 2,
    bottom: hp("1%"),
  },
  inputView: {
    flexDirection: "row",
    height: hp("6%"),
    paddingHorizontal: 2,
    alignSelf: "center",
    borderRadius: hp("1%"),
    borderWidth: hp("0.09%"),
    borderColor: COLORS.black,
    backgroundColor: COLORS.white,
  },
  errorText: {
    color: COLORS.error,
    marginLeft: 1.8,
    marginTop: hp(0.6),
    marginBottom: 1,
    textAlign: "right",
    fontSize: 12,
  },
  inputTextStyle: {
    flex: 1,

    paddingLeft: 10,
    fontSize: 16,
    color: COLORS.black,
    // textAlignVertical: 'top',
  },
});
