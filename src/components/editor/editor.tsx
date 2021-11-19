import { Button, ButtonProps } from '@chakra-ui/button';
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/editable';
import { Center, HStack, Stack, VStack } from '@chakra-ui/layout';
import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    Radio,
    RadioGroup,
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { useEditor } from './useEditor';

type DrawerProps = {
    children: JSX.Element | JSX.Element[];
};
export function DrawerExample({ children }: DrawerProps): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef(null);

    return (
        <>
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>{children}</DrawerBody>

                    <DrawerFooter></DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}
export const Editor = (): JSX.Element => {
    const { variants, getterSetter, variant, setVariant, styles } = useEditor();
    const propertyKeys = Object.keys(getterSetter) as unknown as [
        keyof ButtonProps
    ];

    return (
        <Center>
            <HStack w="full" spacing="2px">
                <VStack>
                    <Button>hello</Button>
                    <Button
                        bg={getterSetter.bg?.value}
                        boxShadow={getterSetter.boxShadow?.value}
                        __css={styles}
                    >
                        hello
                    </Button>
                </VStack>
                <VStack>
                    {propertyKeys.map((property) => {
                        return (
                            <Editable
                                key={property}
                                defaultValue={getterSetter[property]?.value}
                                onChange={getterSetter[property]?.setValue}
                            >
                                <EditablePreview />
                                <EditableInput />
                            </Editable>
                        );
                    })}
                    <RadioGroup
                        key="variant"
                        value={variant}
                        onChange={setVariant}
                    >
                        <Stack direction="row">
                            {variants.map((value) => (
                                <Radio value={value} key={value}>
                                    {value}
                                </Radio>
                            ))}
                        </Stack>
                    </RadioGroup>
                </VStack>
            </HStack>
        </Center>
    );
};

export default Editor;
