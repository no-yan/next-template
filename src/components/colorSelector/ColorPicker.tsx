import {
    Button,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RgbaColorPicker } from 'react-colorful';

const format = (number: number): string => {
    const hex = number.toString(16);

    return hex.length < 2 ? '0' + hex : hex;
};
type RgbaColor = {
    r: number;
    g: number;
    b: number;
    a: number;
};
export const rgbaToHex = ({ r, g, b }: RgbaColor): string => {
    return `#${format(r)}${format(g)}${format(b)}`;
};

// FIXME: focus管理 popoverが開いて、Triggerにfocusがある時、ContentのクリックはPopoverを閉じる。
// Focusのある無しに関わらず、BlurされていないContentは空いたままであるべき。
export const ColorPicker = (): JSX.Element => {
    const [color, setColor] = useState({
        r: 213,
        g: 50,
        b: 16,
        a: 0.2,
    });
    const colorScheme = 'red';

    return (
        <>
            <Popover trigger="hover">
                <PopoverTrigger>
                    <Button
                        size="xs"
                        bg={`${colorScheme}.400`}
                        _hover={{ bg: `${colorScheme}.500` }}
                    >
                        color
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    w="min-content"
                    border="0px"
                    borderColor="transparent"
                    bg="transparent"
                    //To avoid blur around the picker area, event outside.
                    position="relative"
                    p={1}
                    top={-1}
                >
                    <PopoverBody>
                        <RgbaColorPicker color={color} onChange={setColor} />
                    </PopoverBody>{' '}
                </PopoverContent>
            </Popover>
        </>
    );
};
// TODO: react-colorfulを使って色を設定できるようにする
