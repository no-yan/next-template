import { Button } from '@chakra-ui/button';
import {
    Box,
    Grid,
    HStack,
    Heading,
    List,
    ListItem,
    Text,
    VStack,
} from '@chakra-ui/react';
import React from 'react';

const Layout = (): JSX.Element => {
    return (
        <>
            <HStack
                w="full"
                justify={'center'}
                align={'baseline'}
                spacing="20"
                mt={20}
            >
                <Box
                    // bg={useColorModeValue('white', 'green.700')}
                    p={4}
                    colorScheme={'green'}
                >
                    <Heading>Edit Component</Heading>
                    <Grid
                        w="full"
                        templateRows="repeat(3, 1fr)"
                        templateColumns="repeat(3, 1fr)"
                        gap="3"
                        pt={12}
                        // ml="-3.5"
                        // my="4"
                    >
                        <Button colorScheme="blue" variant={'ghost'}>
                            Button
                        </Button>
                        <Button colorScheme="blue" variant={'link'}>
                            Button
                        </Button>
                        <Button colorScheme="blue" variant={'outline'}>
                            Button
                        </Button>
                        <Button colorScheme="blue" variant={'solid'}>
                            Button
                        </Button>
                        <Button colorScheme="blue" variant={'unstyled'}>
                            Button
                        </Button>
                    </Grid>
                </Box>
                <VStack align={'start'}>
                    <Heading mt={4}>Hello</Heading>
                    <Text>This is a area we can write</Text>
                    <List mt={8}>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem>Consectetur adipiscing elit</ListItem>
                        <ListItem>Integer molestie lorem at massa</ListItem>
                        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    </List>
                </VStack>
            </HStack>
        </>
    );
};

export default Layout;
