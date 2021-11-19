import { omitThemingProps, ThemingProps } from '@chakra-ui/system';

describe('useExampleModalHook', () => {
    it('should be omit specified theming props', () => {
        const props = {
            size: 2,
            styleConfig: 2,
            variant: 2,
            colorScheme: 2,

            h: 10,
            minW: 10,
            fontSize: 'md',
            px: 4,
            bg: 'gray.100',
            _active: '{bg: "gray.300"}',
        };
        const expectedResult = {
            h: 10,
            minW: 10,
            fontSize: 'md',
            px: 4,
            bg: 'gray.100',
            _active: '{bg: "gray.300"}',
        };
        const result = omitThemingProps(
            props as unknown as ThemingProps<string>
        );
        expect(result).toStrictEqual(expectedResult);
        // because it uses nested object, we need deep equality comparison.
    });
});
