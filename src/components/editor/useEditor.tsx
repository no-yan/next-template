import { ButtonProps } from '@chakra-ui/button';
import { CSSObject, theme, useStyleConfig } from '@chakra-ui/react';
import React, { useState } from 'react';

export const useEditor = (): {
    variants: string[];
    getterSetter: {
        [key in keyof ButtonProps]?: {
            value: string;
            setValue: (arg: string) => void;
        };
    };
    variant: string;
    setVariant: React.Dispatch<React.SetStateAction<string>>;
    styles: CSSObject;
} => {
    const variants = Object.keys(theme.components.Button.variants);
    const [bg, setBg] = useState('red.100');
    const [size, setSize] = useState('md');
    const [boxShadow, setBoxShadow] = useState('lg');
    const [variant, setVariant] = useState('solid');
    const getterSetter: {
        bg: { value: string; setValue: (arg: string) => void };
        size: { value: string; setValue: (arg: string) => void };
        boxShadow: { value: string; setValue: (arg: string) => void };
    } = {
        bg: { value: bg, setValue: setBg },
        size: { value: size, setValue: setSize },
        boxShadow: { value: boxShadow, setValue: setBoxShadow },
    };

    const styles = useStyleConfig('Button', { size, variant });

    return { variants, getterSetter, variant, setVariant, styles };
};
