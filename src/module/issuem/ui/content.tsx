'use client'
import { LayoutBg, WARNA } from '@/module/_global';
import { Box, Flex, Image, Notification, Paper, Progress, rem, Select, SimpleGrid, Stack, Text } from '@mantine/core';
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
                                    <Text fw={800} fz={"lg"}>ISSUE MONITORING</Text>
                                    <Text fz={"sm"}>Pemantauan Isu-Isu Utama</Text>
                                </Box>
                                <Box>
                                    <Flex gap={"xs"} align={"center"}>
                                        <Box>
                                            <Select
                                                placeholder="Pick value"
                                                data={['Seluruh Malaysia', 'Semenanjung', 'Sabah', 'Sarawak']}
                                                defaultValue="Seluruh Malaysia"
                                                styles={{ input: { backgroundColor: "white", color: "black" } }}
                                            />
                                        </Box>
                                        <Text fz={"sm"}>Last Updated: 22 November 2024</Text>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                        <Box pb={10}>
                            <SimpleGrid
                                cols={{ base: 1, sm: 2, lg: 4 }}>
                                <Box>
                                    <Paper withBorder style={{ borderColor: "#EF4444" }} radius={"sm"} w={rem(240)} bg={WARNA.bgMain} p={10}>
                                        <Text fz={"sm"} mb={5}>Most Critical Issue</Text>
                                        <Text fz={"h3"} fw={"bold"}>Cost of Living</Text>
                                        <Text fz={"sm"} c={"#EF4444"}>Severity: 92%</Text>
                                    </Paper>
                                </Box>
                                <Box>
                                    <Paper withBorder style={{ borderColor: "#F59E0B" }} radius={"sm"} w={rem(240)} bg={WARNA.bgMain} p={11}>
                                        <Text fz={"sm"} mb={2}>Rising Concern</Text>
                                        <Text fz={"h3"} fw={"bold"}>Pekerjaan</Text>
                                        <Flex gap={3} align={"center"}>
                                            <Text fz={"sm"} c={"#F59E0B"}>Trending</Text>
                                            <FaArrowUp size={10} color='#F59E0B' />
                                            <Text fz={"sm"} c={"#F59E0B"}>15%</Text>
                                        </Flex>
                                    </Paper>
                                </Box>
                                <Box>
                                    <Paper withBorder style={{ borderColor: "#11B880" }} radius={"sm"} w={rem(240)} bg={WARNA.bgMain} p={8}>
                                        <Text fz={"sm"} mb={5}>Improving Issue</Text>
                                        <Text fz={"h3"} fw={"bold"}>Infrastruktur</Text>
                                        <Text fz={"sm"} c={"#11B880"}>Improved 8%</Text>
                                    </Paper>
                                </Box>
                                <Box>
                                    <Paper withBorder style={{ borderColor: "#3B80F7" }} radius={"sm"} w={rem(240)} bg={WARNA.bgMain} p={10}>
                                        <Text fz={"sm"} mb={2}>Active Discussions</Text>
                                        <Text fz={"h3"} fw={"bold"}>4,521</Text>
                                        <Text fz={"sm"} c={"#3B80F7"}>Last 24 Hours</Text>
                                    </Paper>
                                </Box>
                            </SimpleGrid>
                        </Box>
                        <Box>
                            <Flex gap={"md"}>
                                <Box>
                                    <Box>
                                        <Paper h={"55vh"} w={rem(400)} bg={WARNA.bgNavbar} p={15}>
                                            <Text fz={"md"} fw={"bold"}>Ranking Isu</Text>
                                            <Box pt={10}>
                                                <Notification color='red' withCloseButton={false} bg={"#A1A1A11B"}>
                                                    <Flex justify={"space-between"} align={"center"}>
                                                        <Box>
                                                            <Text fz={"sm"} fw={"bold"}>1. Cost of Living</Text>
                                                            <Text fz={"xs"}>Kritikal</Text>
                                                        </Box>
                                                        <Flex gap={3} align={"center"}>
                                                            <Text c={"#EF4545"} fz={"sm"}>92%</Text>
                                                        </Flex>
                                                    </Flex>
                                                </Notification>
                                            </Box>
                                            <Box pt={10}>
                                                <Notification color='red' withCloseButton={false} bg={"#A1A1A11B"}>
                                                    <Flex justify={"space-between"} align={"center"}>
                                                        <Box>
                                                            <Text fz={"sm"} fw={"bold"}>2. Ekonomi</Text>
                                                            <Text fz={"xs"}>Kritikal</Text>
                                                        </Box>
                                                        <Flex gap={3} align={"center"}>
                                                            <Text c={"#EF4545"} fz={"sm"}>88%</Text>
                                                        </Flex>
                                                    </Flex>
                                                </Notification>
                                            </Box>
                                            <Box pt={10}>
                                                <Notification color='#F59E0B' withCloseButton={false} bg={"#A1A1A11B"}>
                                                    <Flex justify={"space-between"} align={"center"}>
                                                        <Box>
                                                            <Text fz={"sm"} fw={"bold"}>3. Pekerjaan</Text>
                                                            <Text fz={"xs"}>Tinggi</Text>
                                                        </Box>
                                                        <Flex gap={3} align={"center"}>
                                                            <Text c={"#F59E0B"} fz={"sm"}>78%</Text>
                                                        </Flex>
                                                    </Flex>
                                                </Notification>
                                            </Box>
                                            <Box pt={10}>
                                                <Notification color='#F59E0B' withCloseButton={false} bg={"#A1A1A11B"}>
                                                    <Flex justify={"space-between"} align={"center"}>
                                                        <Box>
                                                            <Text fz={"sm"} fw={"bold"}>4. Perumahan</Text>
                                                            <Text fz={"xs"}>Tinggi</Text>
                                                        </Box>
                                                        <Flex gap={3} align={"center"}>
                                                            <Text c={"#F59E0B"} fz={"sm"}>75%</Text>
                                                        </Flex>
                                                    </Flex>
                                                </Notification>
                                            </Box>
                                        </Paper>
                                    </Box>
                                </Box>
                                <Box pb={15}>
                                    <Paper h={"47vh"} w={rem(600)} bg={WARNA.bgNavbar} p={20}>
                                        <Box>
                                            <Text fz={"md"} fw={"bold"}>Trend Analysis</Text>
                                            <Box pt={10}>
                                                <Stack justify='center' align='center'>
                                                    <Image radius={"lg"} src={"assets/image/Malaysiani.jpeg"} alt='' w={580} />
                                                </Stack>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Box pb={15}>
                                <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
                                    <Box pt={10}>
                                        <Paper h={"26vh"} w={rem(250)} bg={WARNA.bgNavbar} p={20}>
                                            <Text pb={10} fz={"sm"} fw={"bold"}>Ekonomi & Sara Hidup</Text>
                                            <Box>
                                                <Flex pb={5} justify={"space-between"} align={"center"}>
                                                    <Text fz={"sm"}>Inflasi</Text>
                                                    <Text c={"#EF4545"} fw={"bold"} fz={"sm"}>Kritikal</Text>
                                                </Flex>
                                                <Box>
                                                    <Progress size="sm" value={90} color={"#EF4545"} />
                                                </Box>
                                            </Box>
                                            <Box pt={10}>
                                                <Flex pb={5} justify={"space-between"} align={"center"}>
                                                    <Text fz={"sm"}>Harga Barang</Text>
                                                    <Text c={"#EF4545"} fw={"bold"} fz={"sm"}>Kritikal</Text>
                                                </Flex>
                                                <Box>
                                                    <Progress size="sm" value={80} color={"#EF4545"} />
                                                </Box>
                                            </Box>
                                            <Box pt={10}>
                                                <Flex pb={5} justify={"space-between"} align={"center"}>
                                                    <Text fz={"sm"}>Subsidi</Text>
                                                    <Text c={"#F59E0B"} fw={"bold"} fz={"sm"}>Tinggi</Text>
                                                </Flex>
                                                <Box>
                                                    <Progress size="sm" value={75} color={"#F59E0B"} />
                                                </Box>
                                            </Box>

                                        </Paper>
                                    </Box>
                                    <Box pt={10}>
                                        <Paper h={"26vh"} w={rem(250)} bg={WARNA.bgNavbar} p={20}>
                                            <Text pb={10} fz={"sm"} fw={"bold"}>Isu Sosial</Text>
                                            <Box>
                                                <Flex pb={5} justify={"space-between"} align={"center"}>
                                                    <Text fz={"sm"}>Perumahan</Text>
                                                    <Text c={"#F59E0B"} fw={"bold"} fz={"sm"}>Tinggi</Text>
                                                </Flex>
                                                <Box>
                                                    <Progress size="sm" value={80} color={"#F59E0B"} />
                                                </Box>
                                            </Box>
                                            <Box pt={10}>
                                                <Flex pb={5} justify={"space-between"} align={"center"}>
                                                    <Text fz={"sm"}>Pekerjaan</Text>
                                                    <Text c={"#F59E0B"} fw={"bold"} fz={"sm"}>Tinggi</Text>
                                                </Flex>
                                                <Box>
                                                    <Progress size="sm" value={85} color={"#F59E0B"} />
                                                </Box>
                                            </Box>
                                            <Box pt={10}>
                                                <Flex pb={5} justify={"space-between"} align={"center"}>
                                                    <Text fz={"sm"}>Pendidikan</Text>
                                                    <Text c={"#3B80F7"} fw={"bold"} fz={"sm"}>Sederhana</Text>
                                                </Flex>
                                                <Box>
                                                    <Progress size="sm" value={75} color={"#3B80F7"} />
                                                </Box>
                                            </Box>

                                        </Paper>
                                    </Box>
                                    <Box pt={10}>
                                        <Paper h={"26vh"} w={rem(250)} bg={WARNA.bgNavbar} p={20}>
                                            <Text pb={10} fz={"sm"} fw={"bold"}>Infrastruktur & Kesihatan</Text>
                                            <Box>
                                                <Flex pb={5} justify={"space-between"} align={"center"}>
                                                    <Text fz={"sm"}>Kesihatan</Text>
                                                    <Text c={"#3B80F7"} fw={"bold"} fz={"sm"}>Sederhana</Text>
                                                </Flex>
                                                <Box>
                                                    <Progress size="sm" value={50} color={"#3B80F7"} />
                                                </Box>
                                            </Box>
                                            <Box pt={10}>
                                                <Flex pb={5} justify={"space-between"} align={"center"}>
                                                    <Text fz={"sm"}>Pengangkutan</Text>
                                                    <Text c={"#11B880"} fw={"bold"} fz={"sm"}>Baik</Text>
                                                </Flex>
                                                <Box>
                                                    <Progress size="sm" value={40} color={"#11B880"} />
                                                </Box>
                                            </Box>
                                            <Box pt={10}>
                                                <Flex pb={5} justify={"space-between"} align={"center"}>
                                                    <Text fz={"sm"}>Utiliti</Text>
                                                    <Text c={"#11B880"} fw={"bold"} fz={"sm"}>Baik</Text>
                                                </Flex>
                                                <Box>
                                                    <Progress size="sm" value={35} color={"#11B880"} />
                                                </Box>
                                            </Box>

                                        </Paper>
                                    </Box>
                                    <Box pt={10}>
                                        <Paper h={"26vh"} w={rem(250)} bg={WARNA.bgNavbar} p={20}>
                                            <Text pb={10} fz={"sm"} fw={"bold"}>Isu Perkauman & Agama</Text>
                                            <Box>
                                                <Flex pb={5} justify={"space-between"} align={"center"}>
                                                    <Text fz={"sm"}>Sensitiviti Kaum</Text>
                                                    <Text c={"#F59E0B"} fw={"bold"} fz={"sm"}>Tinggi</Text>
                                                </Flex>
                                                <Box>
                                                    <Progress size="sm" value={80} color={"#F59E0B"} />
                                                </Box>
                                            </Box>
                                            <Box pt={10}>
                                                <Flex pb={5} justify={"space-between"} align={"center"}>
                                                    <Text fz={"sm"}>Isu Agama</Text>
                                                    <Text c={"#F59E0B"} fw={"bold"} fz={"sm"}>Tinggi</Text>
                                                </Flex>
                                                <Box>
                                                    <Progress size="sm" value={76} color={"#F59E0B"} />
                                                </Box>
                                            </Box>
                                            <Box pt={10}>
                                                <Flex pb={5} justify={"space-between"} align={"center"}>
                                                    <Text fz={"sm"}>Polarisasi</Text>
                                                    <Text c={"#F59E0B"} fw={"bold"} fz={"sm"}>Tinggi</Text>
                                                </Flex>
                                                <Box>
                                                    <Progress size="sm" value={78} color={"#F59E0B"} />
                                                </Box>
                                            </Box>

                                        </Paper>
                                    </Box>
                                </SimpleGrid>
                            </Box>
                        </Box>
                    </Stack >
                </Box >
            </LayoutBg >
        </Box >
    );
}

export default Content;
