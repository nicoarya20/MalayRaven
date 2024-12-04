'use client'
import { LayoutBg, WARNA } from '@/module/_global';
import { Box, Flex, Paper, Progress, rem, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import { FaArrowUp } from 'react-icons/fa6';

function Content() {
    return (
        <Box>
            <LayoutBg>
                <Box p={20}>
                    <Stack gap={"xs"}>
                        <Box pb={10}>
                            <Flex gap={"xs"} align={"center"} justify={"space-between"}>
                                <Box>
                                    <Text fw={800} fz={"lg"}>SPECIAL ANALYSIS</Text>
                                    <Text fz={"sm"}>Analisis Khusus Pilihan Raya</Text>
                                </Box>
                                <Box>
                                    <Flex gap={"xs"} align={"center"}>
                                        <Box>
                                            <Select
                                                placeholder="Pick value"
                                                data={['Semua Gabungan', 'Pakatan Harapan', 'Perikatan Nasional', 'Barisan Nasional']}
                                                defaultValue="Semua Gabungan"
                                                styles={{ input: { backgroundColor: "white", color: "black" } }}
                                            />
                                        </Box>
                                        <Text fz={"sm"}>22 November 2024</Text>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex gap={"md"}>
                                <Box>
                                    <Box pb={15}>
                                        <Paper h={"63vh"} w={rem(500)} bg={WARNA.bgNavbar} p={20}>
                                            <Text fz={"lg"} pb={10} fw={"bold"}>Ceramah Impact</Text>
                                            <Box>
                                                <SimpleGrid
                                                    cols={{ base: 1, sm: 2, lg: 2 }}>
                                                    <Box>
                                                        <Paper h={rem(110)} bg={"#DDDDDD16"} p={10}>
                                                            <Text fz={"sm"}>Total Ceramah</Text>
                                                            <Text fw={"bold"} fz={"h2"}>1,245</Text>
                                                            <Flex align={"center"} gap={3}>
                                                                <FaArrowUp color={"#11B880"} size={10} />
                                                                <Text c={"#11B880"} fz={"sm"}>15% minggu lepas</Text>
                                                            </Flex>
                                                        </Paper>
                                                    </Box>
                                                    <Box>
                                                        <Paper h={rem(110)} bg={"#DDDDDD16"} p={10}>
                                                            <Text fz={"sm"}>Purata Kehadiran</Text>
                                                            <Text fw={"bold"} fz={"h2"}>850</Text>
                                                            <Text c={"#B86F11"} fz={"sm"}>per ceramah</Text>
                                                        </Paper>
                                                    </Box>
                                                </SimpleGrid>
                                            </Box>
                                            <Box pt={10}>
                                                <Paper w={rem(459)} h={rem(220)} bg={"#DDDDDD16"} p={10}>
                                                    <Text fz={"sm"} fw={"bold"} py={10}>Engagement Score</Text>
                                                    <Box>
                                                        <Box>
                                                            <Flex pb={5} justify={"space-between"} align={"center"}>
                                                                <Text fz={"sm"}>Urban</Text>
                                                                <Text c={"#11B880"} fw={"bold"} fz={"sm"}>85%</Text>
                                                            </Flex>
                                                            <Box pt={5}>
                                                                <Progress color={"#11B880"} value={85} />
                                                            </Box>
                                                        </Box>
                                                        <Box pt={10}>
                                                            <Flex pb={5} justify={"space-between"} align={"center"}>
                                                                <Text fz={"sm"}>Semi-Urban</Text>
                                                                <Text fw={"bold"} c={"#1162B8FF"} fz={"sm"}>75%</Text>
                                                            </Flex>
                                                            <Box pt={5}>
                                                                <Progress color={"#1162B8FF"} value={75} />
                                                            </Box>
                                                        </Box>
                                                        <Box pt={10}>
                                                            <Flex pb={5} justify={"space-between"} align={"center"}>
                                                                <Text fz={"sm"}>Sarawak</Text>
                                                                <Text fw={"bold"} c={"#B87011FF"} fz={"sm"}>65%</Text>
                                                            </Flex>
                                                            <Box pt={5}>
                                                                <Progress color={"#B87011FF"} value={65} />
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Paper>
                                            </Box>
                                        </Paper>
                                    </Box>
                                </Box>
                                <Box pb={15}>
                                    <Paper h={"63vh"} w={rem(500)} bg={WARNA.bgNavbar} p={20}>
                                        <Text pb={10} fz={"lg"} fw={"bold"}>Manifesto Tracking</Text>
                                        <Box>
                                            <SimpleGrid
                                                cols={{ base: 1, sm: 2, lg: 3 }}>
                                                <Box>
                                                    <Paper h={rem(70)} bg={"#DDDDDD16"} p={10}>
                                                        <Text c={"#11B880"} fw={"bold"} fz={"lg"}>42</Text>
                                                        <Text fz={"sm"}>Completed</Text>
                                                    </Paper>
                                                </Box>
                                                <Box>
                                                    <Paper h={rem(70)} bg={"#DDDDDD16"} p={10}>
                                                        <Text c={"#F59E0B"} fw={"bold"} fz={"lg"}>28</Text>
                                                        <Text fz={"sm"}>In Progress</Text>
                                                    </Paper>
                                                </Box>
                                                <Box>
                                                    <Paper h={rem(70)} bg={"#DDDDDD16"} p={10}>
                                                        <Text c={"#CC4548"} fw={"bold"} fz={"lg"}>15</Text>
                                                        <Text fz={"sm"}>Delayed</Text>
                                                    </Paper>
                                                </Box>
                                                <Box>
                                                    <Paper h={rem(70)} bg={"#DDDDDD16"} p={10}>
                                                        <Text c={"#9AA3AE"} fw={"bold"} fz={"lg"}>15</Text>
                                                        <Text fz={"sm"}>Not Started</Text>
                                                    </Paper>
                                                </Box>
                                            </SimpleGrid>
                                        </Box>
                                        <Box>
                                            <Box>
                                                <Box pt={10}>
                                                    <Paper bg={"#7A7B7B20"} radius={"md"} p={15}>
                                                        <Flex pb={5} justify={"space-between"} align={"center"}>
                                                            <Text fw={"bold"} fz={"sm"}>Ekonomi</Text>
                                                            <Text fw={"bold"} fz={"sm"}>85</Text>
                                                        </Flex>
                                                        <Box pt={3}>
                                                            <Progress color={"#11B880"} value={85} />
                                                        </Box>
                                                    </Paper>
                                                </Box>
                                                <Box pt={10}>
                                                    <Paper bg={"#7A7B7B20"} radius={"md"} p={15}>
                                                        <Flex pb={5} justify={"space-between"} align={"center"}>
                                                            <Text fw={"bold"} fz={"sm"}>Pendidikan</Text>
                                                            <Text fw={"bold"} fz={"sm"}>65</Text>
                                                        </Flex>
                                                        <Box pt={3}>
                                                            <Progress color={"#B87011FF"} value={65} />
                                                        </Box>
                                                    </Paper>
                                                </Box>
                                                <Box pt={10}>
                                                    <Paper bg={"#7A7B7B20"} radius={"md"} p={15}>
                                                        <Flex pb={5} justify={"space-between"} align={"center"}>
                                                            <Text fw={"bold"} fz={"sm"}>Infrastruktur</Text>
                                                            <Text fw={"bold"} fz={"sm"}>45</Text>
                                                        </Flex>
                                                        <Box pt={3}>
                                                            <Progress color={"#EF4545"} value={45} />
                                                        </Box>
                                                    </Paper>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex gap={"md"}>
                                <SimpleGrid
                                    cols={{ base: 1, sm: 2, lg: 3 }}>
                                    <Box>
                                        <Box pb={15}>
                                            <Paper h={"45vh"} w={rem(325)} bg={WARNA.bgNavbar} p={20}>
                                                <Text pb={10} fz={"md"} fw={"bold"}>Pengundi Muda & Kali Pertama</Text>
                                                <Box>
                                                    <Stack gap={3}>
                                                        <Box>
                                                            <Paper w={rem(285)} bg={"#CECDCD2B"} p={10}>
                                                                <Text fz={"sm"} fw={"bold"} pb={10}>Media Coverage</Text>
                                                                <Flex justify={"space-between"} align={"center"}>
                                                                    <Text fz={"xs"}>Traditional</Text>
                                                                    <Text fw={"bold"} c={"#11B880"} fz={"sm"}>75%</Text>
                                                                </Flex>
                                                                <Flex pt={5} justify={"space-between"} align={"center"}>
                                                                    <Text fz={"xs"}>Social</Text>
                                                                    <Text fw={"bold"} c={"#1062B8"} fz={"sm"}>85%</Text>
                                                                </Flex>
                                                                <Flex pt={5} justify={"space-between"} align={"center"}>
                                                                    <Text fz={"xs"}>Online</Text>
                                                                    <Text fw={"bold"} c={"#F59E0B"} fz={"sm"}>80%</Text>
                                                                </Flex>
                                                            </Paper>
                                                        </Box>
                                                        <Box pt={10}>
                                                            <Paper w={rem(285)} bg={"#CECDCD2B"} p={10}>
                                                                <Text fz={"sm"} fw={"bold"} pb={10}>Message Impact</Text>
                                                                <Flex justify={"space-between"} align={"center"}>
                                                                    <Text fz={"xs"}>Reach</Text>
                                                                    <Text fw={"bold"} c={"#11B880"} fz={"sm"}>12.5M</Text>
                                                                </Flex>
                                                                <Flex pt={5} justify={"space-between"} align={"center"}>
                                                                    <Text fz={"xs"}>Engagement</Text>
                                                                    <Text fw={"bold"} c={"#1062B8"} fz={"sm"}>4.2M</Text>
                                                                </Flex>
                                                                <Flex pt={5} justify={"space-between"} align={"center"}>
                                                                    <Text fz={"xs"}>Conversion</Text>
                                                                    <Text fw={"bold"} c={"#F59E0B"} fz={"sm"}>2.1M</Text>
                                                                </Flex>
                                                            </Paper>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </Paper>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box pb={15}>
                                            <Paper h={"45vh"} w={rem(325)} bg={WARNA.bgNavbar} p={20}>
                                                <Text pb={10} fz={"md"} fw={"bold"}>Candidate Popularity</Text>
                                                <Box>
                                                    <Stack gap={3}>
                                                        <Box>
                                                            <Paper w={rem(285)} bg={"#CECDCD2B"} p={10}>
                                                                <Text fz={"sm"} fw={"bold"} pb={10}>Top Performers</Text>
                                                                <Flex justify={"space-between"} align={"center"}>
                                                                    <Text fz={"xs"}>Anwar Ibrahim</Text>
                                                                    <Text fw={"bold"} c={"#11B880"} fz={"sm"}>85%</Text>
                                                                </Flex>
                                                                <Flex pt={5} justify={"space-between"} align={"center"}>
                                                                    <Text fz={"xs"}>Muhyiddin Yassin</Text>
                                                                    <Text fw={"bold"} c={"#1062B8"} fz={"sm"}>75%</Text>
                                                                </Flex>
                                                                <Flex pt={5} justify={"space-between"} align={"center"}>
                                                                    <Text fz={"xs"}>Zahid Hamidi</Text>
                                                                    <Text fw={"bold"} c={"#F59E0B"} fz={"sm"}>65%</Text>
                                                                </Flex>
                                                            </Paper>
                                                        </Box>
                                                        <Box pt={10}>
                                                            <Paper w={rem(285)} bg={"#CECDCD2B"} h={"17vh"} p={10}>
                                                                <Text fz={"sm"} fw={"bold"} pb={10}>Rising Stars</Text>
                                                                <Flex justify={"space-between"} align={"center"}>
                                                                    <Text fz={"xs"}>New Leaders</Text>
                                                                    <Flex gap={3} align={"center"}>
                                                                        <FaArrowUp size={10} color='#11B880' />
                                                                        <Text fw={"bold"} c={"#11B880"} fz={"sm"}>12%</Text>
                                                                    </Flex>
                                                                </Flex>
                                                                <Flex pt={5} justify={"space-between"} align={"center"}>
                                                                    <Text fz={"xs"}>Social</Text>
                                                                    <Flex gap={3} align={"center"}>
                                                                        <FaArrowUp size={10} color='#1062B8' />
                                                                        <Text fw={"bold"} c={"#1062B8"} fz={"sm"}>15%</Text>
                                                                    </Flex>
                                                                </Flex>
                                                            </Paper>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </Paper>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box pb={15}>
                                            <Paper h={"45vh"} w={rem(328)} bg={WARNA.bgNavbar} p={20}>
                                                <Text pb={10} fz={"md"} fw={"bold"}>Coalition Stability</Text>
                                                <Box>
                                                    <Stack gap={3}>
                                                        <Box>
                                                            <Paper w={rem(285)} bg={"#CECDCD2B"} p={10}>
                                                                <Text fz={"sm"} fw={"bold"} pb={10}>Unity Score</Text>
                                                                <Flex justify={"space-between"} align={"center"}>
                                                                    <Text fz={"xs"}>PH</Text>
                                                                    <Text fw={"bold"} c={"#11B880"} fz={"sm"}>85%</Text>
                                                                </Flex>
                                                                <Flex pt={5} justify={"space-between"} align={"center"}>
                                                                    <Text fz={"xs"}>PN</Text>
                                                                    <Text fw={"bold"} c={"#1062B8"} fz={"sm"}>75%</Text>
                                                                </Flex>
                                                                <Flex pt={5} justify={"space-between"} align={"center"}>
                                                                    <Text fz={"xs"}>BN</Text>
                                                                    <Text fw={"bold"} c={"#F59E0B"} fz={"sm"}>70%</Text>
                                                                </Flex>
                                                            </Paper>
                                                        </Box>
                                                        <Box pt={10}>
                                                            <Paper w={rem(285)} h={"17vh"} bg={"#CECDCD2B"} p={10}>
                                                                <Text fz={"sm"}  fw={"bold"} pb={10}>Risk Factors</Text>
                                                                <Flex justify={"space-between"} align={"center"}>
                                                                    <Text fz={"xs"}>Internal Conflict</Text>
                                                                    <Text fw={"bold"} c={"#F59E0B"} fz={"sm"}>Medium</Text>
                                                                </Flex>
                                                                <Flex pt={5} justify={"space-between"} align={"center"}>
                                                                    <Text fz={"xs"}>Policy Aligment</Text>
                                                                    <Text fw={"bold"} c={"#11B880"} fz={"sm"}>High</Text>
                                                                </Flex>
                                                            </Paper>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </Paper>
                                        </Box>
                                    </Box>

                                </SimpleGrid>
                            </Flex>
                        </Box>
                    </Stack >
                </Box >
            </LayoutBg >
        </Box >
    );
}

export default Content;
