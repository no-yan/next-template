import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import React from 'react';
import { PropertyGroup } from './Feature';
import { LayoutProps } from './Layout';

export function MyTab(): JSX.Element {
    const data: readonly LayoutProps[] = [
        {
            label: 'font',
            text: '12px',
        },
        {
            label: 'color',
            text: 'red.200',
        },
        {
            label: 'Bg Color',
            text: 'gray.500',
        },
    ] as const;

    return (
        <Tabs w="500px">
            <TabList>
                {/* TODO: state liftup to make that infermation will be putted into. */}
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
            </TabList>

            <TabPanels>
                {data.map((_item) => (
                    <TabPanel key={_item.label}>
                        <PropertyGroup groupLabel="basic" properties={data} />
                        <PropertyGroup groupLabel="basic" properties={data} />
                        <PropertyGroup groupLabel="basic" properties={data} />
                        <PropertyGroup groupLabel="basic" properties={data} />
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    );
}
