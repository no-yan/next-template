import {
    Box,
    Button,
    Collapse,
    Flex,
    Icon,
    IconButton,
    Link,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import {
    ChevronDownIcon,
    ChevronRightIcon,
    CloseIcon,
    HamburgerIcon,
} from '@chakra-ui/icons';
import NextLink from 'next/link';
import { DarkModeSwitcher } from './darkModeSwitcher';

// <Button onClick={toggleColorMode}>
// Toggle {colorMode === "light" ? "Dark" : "Light"}
// </Button>
export default function NabVar(): JSX.Element {
    const { isOpen, onToggle } = useDisclosure();

    // const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH="60px"
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle="solid"
                borderColor={useColorModeValue('gray.200', 'gray.600')}
                align="center"
            >
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? (
                                <CloseIcon w={3} h={3} />
                            ) : (
                                <HamburgerIcon w={5} h={5} />
                            )
                        }
                        variant="ghost"
                        aria-label="Toggle Navigation"
                    />
                </Flex>
                <Flex
                    flex={{ base: 1 }}
                    justify={{ base: 'center', md: 'start' }}
                    verticalAlign="baseline"
                >
                    <NextLink href="/" passHref>
                        <Text
                            textAlign={useBreakpointValue({
                                base: 'center',
                                md: 'left',
                            })}
                            fontFamily="heading"
                            fontWeight={600}
                            fontSize="lg"
                            color={useColorModeValue('gray.800', 'white')}
                            as={Link}
                        >
                            Book Shelf
                        </Text>
                    </NextLink>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify="flex-end"
                    direction="row"
                    spacing={6}
                >
                    <DarkModeSwitcher />
                    <Button
                        as="a"
                        fontSize="sm"
                        fontWeight={400}
                        variant="link"
                        href="#"
                    >
                        Sign In
                    </Button>
                    <Button
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize="sm"
                        fontWeight={600}
                        color="white"
                        bg="pink.400"
                        href="#"
                        _hover={{
                            bg: 'pink.300',
                        }}
                    >
                        Sign Up
                    </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction="row" spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger="hover" placement="bottom-start">
                        <PopoverTrigger>
                            {/* Because PopoverTrigger requires inner top component be focusable, 
                                    NextLink on the top doesn't work well. 
                                    By that reason, empty div is here.

                                    >> When using this component, ensure the children passed to PopoverTrigger is focusable. 
                                    https://chakra-ui.com/docs/overlay/popover
                                */}
                            <div>
                                <NextLink href={navItem.href ?? '#'} passHref>
                                    <Link
                                        p={2}
                                        fontSize="sm"
                                        fontWeight={500}
                                        color={linkColor}
                                        _hover={{
                                            textDecoration: 'none',
                                            color: linkHoverColor,
                                        }}
                                        isExternal={navItem.href?.startsWith(
                                            'http'
                                        )}
                                    >
                                        {navItem.label}
                                    </Link>
                                </NextLink>
                            </div>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow="xl"
                                bg={popoverContentBgColor}
                                p={4}
                                rounded="xl"
                                minW="sm"
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav
                                            key={child.label}
                                            {...child}
                                        />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => (
    <NextLink href={href ?? '#'}>
        <Link
            role="group"
            display="block"
            p={2}
            rounded="md"
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
            tabIndex={0}
        >
            <Stack direction="row" align="center">
                <Box>
                    <Text
                        transition="all .3s ease"
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}
                    >
                        {label}
                    </Text>
                    <Text fontSize="sm">{subLabel}</Text>
                </Box>
                <Flex
                    transition="all .3s ease"
                    transform="translateX(-10px)"
                    opacity={0}
                    _groupHover={{
                        opacity: '100%',
                        transform: 'translateX(0)',
                    }}
                    justify="flex-end"
                    align="center"
                    flex={1}
                >
                    <Icon color="pink.400" w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    </NextLink>
);

const MobileNav = () => (
    <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}
    >
        {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
        ))}
    </Stack>
);

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                justify="space-between"
                align="center"
                _hover={{
                    textDecoration: 'none',
                }}
            >
                <NextLink href={href ?? '#'}>
                    <Text
                        fontWeight={600}
                        color={useColorModeValue('gray.600', 'gray.200')}
                    >
                        {label}
                    </Text>
                </NextLink>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition="all .25s ease-in-out"
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse
                in={isOpen}
                animateOpacity
                style={{ marginTop: '0!important' }}
            >
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle="solid"
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align="start"
                >
                    {children &&
                        children.map((child) => (
                            <NextLink
                                href={child.href ?? '#'}
                                key={child.label}
                            >
                                <Link py={2}>{child.label}</Link>
                            </NextLink>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Sandbox',
        href: '/sandbox',
        children: [
            {
                label: 'Button Color Selector',
                subLabel: 'ボタン、スライダー、color picker',
                href: '/sandbox',
            },
            {
                label: 'Button Layout 1',
                subLabel: 'Up-and-coming Designers',
                href: '/sandbox/layout1',
            },
            {
                label: 'Button Detail 1',
                subLabel: 'Up-and-coming Designers',
                href: '/sandbox/detail',
            },
        ],
    },
    {
        label: 'Chakra UI',
        href: 'https://chakra-ui.com/',
    },
    {
        label: 'Learn Design',
        href: '#',
    },
    {
        label: 'Hire Designers',
        href: 'hello',
    },
];
