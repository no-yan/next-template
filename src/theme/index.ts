import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// import { Styles } from '@chakra-ui/theme-tools';
// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: true,
};

const Tabs = {
    baseStyle: {
        tabpanel: {
            p: 0,
        },
    },
};
// };
// 3. extend the theme
const theme = extendTheme({ config, components: { Tabs } });

export default theme;
