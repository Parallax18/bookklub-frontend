import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  SelectProps,
  Text,
} from "@chakra-ui/react";

import { ErrorMessage, Field, FieldMetaProps, useFormikContext } from "formik";
import React, { FC, useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface ISelectInput extends SelectProps {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  options: { id: string; title: string }[] | any;
  isMultiSelect?: boolean;
  previewTitles?: string[];
}

const SelectInput: FC<ISelectInput> = (props) => {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(() =>
    props.previewTitles ? props.previewTitles[0] : null
  );
  const [selectedItems, setSelectedItems] = useState<string[] | null>(() =>
    props.previewTitles ? props.previewTitles : null
  );
  useEffect(() => {
    if (props.previewTitles && !props.isMultiSelect)
      setSelectedTitle(props.previewTitles[0]);
    if (props.previewTitles && !props.isMultiSelect)
      setSelectedItems(props.previewTitles);
  }, [props.previewTitles, props.isMultiSelect]);
  const formikContext = useFormikContext();
  return (
    <Box as={Field} {...props}>
      {({ meta }: { meta: FieldMetaProps<any> }) => (
        <FormControl
          isInvalid={!!meta.error}
          w={"full"}
          mb={{ s: "20px", md: "24px" }}
        >
          <FormLabel
            color={"#636985"}
            fontSize={"1rem"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"normal"}
            htmlFor={props.name}
          >
            {props.label}
          </FormLabel>

          <Menu
            matchWidth
            {...(props?.isMultiSelect && { closeOnSelect: false })}
          >
            <MenuButton w={"full"} type="button">
              <Flex
                width={"full"}
                height={"3.43975rem"}
                flexShrink={"0"}
                borderRadius={"0.4375rem"}
                border={meta.error ? "1px solid red" : "1px solid #CECECE"}
                borderColor={meta.error ? "red" : "neutral.50"}
                background={"white"}
                alignItems={"center"}
                justifyContent={"space-between"}
                px={"1rem"}
              >
                {props?.isMultiSelect ? (
                  selectedItems?.length! > 0 ? (
                    selectedItems?.map((item) => {
                      return (
                        <Text key={item} color={"brand.anonymousGrey"}>
                          {item}
                        </Text>
                      );
                    })
                  ) : (
                    <Text color={"brand.anonymousGrey"}>
                      {props.placeholder}
                    </Text>
                  )
                ) : (
                  <Text color={"brand.anonymousGrey"}>
                    {selectedTitle || props.placeholder}
                  </Text>
                )}
                <BsChevronDown />
              </Flex>
            </MenuButton>
            <MenuList w={"full"}>
              <MenuOptionGroup
                onChange={(e) => {
                  if (props?.isMultiSelect) {
                    const _selectedItems = (e as string[]).map(
                      (
                        item: string
                      ): {
                        id: string;
                        title: string;
                      } => {
                        return props.options.find((i: any) => i.id === item);
                      }
                    );
                    setSelectedItems(_selectedItems.map((item) => item?.title));
                    formikContext.setFieldValue(
                      props.name,
                      _selectedItems.map((item) => item?.id)
                    );
                  } else {
                    formikContext.setFieldValue(props.name, e);
                    setSelectedTitle(
                      props.options.find((i: any) => i.id === e)?.title
                    );
                  }
                }}
                type={props?.isMultiSelect ? "checkbox" : "radio"}
              >
                {props?.options?.map((item: any) => (
                  <MenuItemOption
                    key={item?.id}
                    value={item?.id}
                    width={"full"}
                    height={"3.43975rem"}
                    flexShrink={"0"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    px={"1rem"}
                    cursor={"pointer"}
                  >
                    {item?.title}
                  </MenuItemOption>
                ))}
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <ErrorMessage component={FormErrorMessage} name={props.name} />
        </FormControl>
      )}
    </Box>
  );
};

export default SelectInput;
