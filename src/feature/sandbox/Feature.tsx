import { Box, Heading } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import type { DeepReadonly } from '../../utils/deepReadonly';
import { Layout } from './Layout';

type FeatureProps = DeepReadonly<{
    groupLabel: string;
    properties: {
        label: string;
        text: string;
    }[];
}>;

export const PropertyGroup = ({
    groupLabel,
    properties,
}: FeatureProps): JSX.Element => {
    return (
        <>
            <Box mt="4">
                <Heading
                    as={'h4'}
                    size="lg"
                    w="full"
                    borderBottomWidth={'1px'}
                    borderBottomColor="gray.500"
                    borderBottomStyle="dashed"
                    mb="1"
                >
                    {groupLabel}
                </Heading>
                <chakra.div>
                    {properties.map((ele) => (
                        <Layout
                            label={ele.label}
                            text={ele.text}
                            key={ele.label}
                        />
                    ))}
                </chakra.div>
            </Box>
        </>
    );
};
