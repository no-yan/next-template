import { useColorModeValue } from '@chakra-ui/color-mode';
import { Stack } from '@chakra-ui/layout';
import type { NextPage } from 'next';
import React from 'react';
import { DrawerExample, Editor } from '../src/components/editor/editor';


const Home: NextPage = () => (
    <Stack
        bg={useColorModeValue('white', 'gray.800')}
        flex={1}
        width="full"
        as="main"
        justify="center"
        align="center"
        spacing="12px"
    >
        <DrawerExample>
            <Editor />
        </DrawerExample>
    </Stack>
);

export default Home;
