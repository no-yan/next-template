import { Box } from '@chakra-ui/layout';
import {
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
} from '@chakra-ui/slider';
import React from 'react';

type ColorSliderProps = {
    colorScheme: string;
    value: number;
    setValue: (...args: number[]) => void;
};
export const ColorSlider = ({
    colorScheme,
    value,
    setValue,
}: ColorSliderProps): JSX.Element => {
    return (
        <Slider
            defaultValue={value}
            onChange={setValue}
            min={100}
            max={900}
            step={100}
        >
            <SliderTrack bg="red.100">
                <Box position="relative" right={10} />
                <SliderFilledTrack bg="tomato" />
            </SliderTrack>
            <SliderThumb boxSize={6} bg={`${colorScheme}.${value}`} />
        </Slider>
    );
};
