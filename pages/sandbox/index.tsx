import { Button } from '@chakra-ui/button';
import { HStack, VStack } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { ColorBox } from '../../src/components/colorSelector/ColorButton';
import { ColorPicker } from '../../src/components/colorSelector/ColorPicker';
import { ColorSlider } from '../../src/components/colorSelector/ColorSlider';

const ButtonSelect = () => {
    const [color, setColor] = useState('red.100');

    return (
        <HStack>
            <Button bg={color}>Check The Color</Button>

            <ColorBox setValue={setColor} />
        </HStack>
    );
};

const SliderSelect = () => {
    const colorScheme = 'red';
    const [colorValue, setColorValue] = useState(100);

    return (
        <HStack minW="800px">
            <Button bg={`${colorScheme}.${colorValue}`}>Check The Color</Button>
            <ColorSlider
                colorScheme={colorScheme}
                value={colorValue}
                setValue={setColorValue}
            />
        </HStack>
    );
};

const Sandbox = (): JSX.Element => {
    return (
        <VStack spacing={2} w="100vw" h="100vh">
            <ButtonSelect />
            <SliderSelect />
            <ColorPicker />
        </VStack>
    );
};

export default Sandbox;
