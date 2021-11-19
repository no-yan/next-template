import { HStack, Text } from '@chakra-ui/layout';
import React from 'react';

export type LayoutProps = {
    readonly label: string;
    readonly text: string;
};
export const Layout = ({ label, text }: LayoutProps) => {
    return (
        <HStack>
            <Text
                as="span"
                w="50%"
                textTransform="capitalize"
                fontWeight="thin"
            >
                {label}
            </Text>

            <Text as="span" w="50%" fontWeight="thin">
                {text}
            </Text>
        </HStack>
    );
};
