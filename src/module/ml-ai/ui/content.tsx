'use client'
import { LayoutBg, WARNA } from '@/module/_global';
import { BarChart } from '@mantine/charts';
import { Box, Flex, Image, List, ListItem, Paper, Progress, rem, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import { FaArrowDown, FaArrowRight, FaArrowUp, FaBell } from 'react-icons/fa6';

export const rp = [
  { kalangan: 'Urban', Persentase: 65 },
  { kalangan: 'Semi-Urban', Persentase: 45 },
  { kalangan: 'Rural', Persentase: 35 }
];

export const impak = [
  { isu: 'Ekonomi', impact: 'Tinggi', Persentase: 65 },
  { isu: 'Sosial', impact: 'Sederhana', Persentase: 45 },
  { isu: 'Governans', impact: 'Rendah', Persentase: 35 }
];

function Content() {
  return (
    <Box>
      <LayoutBg>
        <Box p={20}>
          <Stack gap={"xs"}>
            <Box pb={10}>
              <Flex gap={"xs"} align={"center"} justify={"space-between"}>
                <Box>
                  <Text fw={800} fz={"lg"}>REKOMENDASI ML-AI</Text>
                  <Text fz={"sm"}>22 November 2024 14:31 GMT+8</Text>
                </Box>
                <Box>
                  <Flex gap={"xs"} align={"center"}>
                    <Box>
                      <Select
                        placeholder="Pick value"
                        data={['Pakatan Harapan', 'Barisan Nasional', 'Perikatan Nasional', 'Gabungan Parti Serawak', 'Gabungan Rakyat Sabah']}
                        defaultValue="Pakatan Harapan"
                        styles={{ input: { backgroundColor: "white", color: "black" } }}
                      />
                    </Box>
                    <FaBell size={20} color='#A98228' />
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex gap={"md"}>
                <Box>
                  <Box pb={15}>
                    <Paper h={"32vh"} w={rem(300)} bg={WARNA.bgNavbar} p={20}>
                      <Box>
                        <Box pt={10}>
                          <Stack justify='center' align='center'>
                            <Image radius={"lg"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Pakatan-harapan-logo.svg/2880px-Pakatan-harapan-logo.svg.png"} alt='' w={240} />
                            <Box>
                              <Text ta={"center"} fw={"bold"}>Pakatan Harapan</Text>
                              <Text ta={"center"} fz={"sm"}>Confidence Score 85%</Text>
                            </Box>
                          </Stack>
                        </Box>
                      </Box>
                    </Paper>
                  </Box>
                  <Box>
                    <Paper h={"45vh"} w={rem(300)} bg={WARNA.bgNavbar} p={20}>
                      <Text fw={"bold"} fz={"sm"}>Tindakan Prioriti</Text>
                      <Box pt={10}>
                        <Paper p={10} w={rem(260)} bg={WARNA.bgNavbar} withBorder style={{ borderColor: "#EF4545" }}>
                          <Text fz={"sm"} fw={"bold"} c={"#EF4545"}>KRITIKAL</Text>
                          <Text fz={"xs"}>Pengukuhan sokongan di kawasan luar bandar Pantai Timur</Text>
                        </Paper>
                      </Box>
                      <Box pt={10}>
                        <Paper p={10} w={rem(260)} bg={WARNA.bgNavbar} withBorder style={{ borderColor: "#F59E0B" }}>
                          <Text fz={"sm"} fw={"bold"} c={"#F59E0B"}>PENTING</Text>
                          <Text fz={"xs"}>Penambahbaikan program ekonomi untuk B40</Text>
                        </Paper>
                      </Box>
                      <Box pt={10}>
                        <Paper p={10} w={rem(260)} bg={WARNA.bgNavbar} withBorder style={{ borderColor: "#11B880" }}>
                          <Text fz={"sm"} fw={"bold"} c={"#11B880"}>PEMANTAUAN</Text>
                          <Text fz={"xs"}>Sentiment media sosial terhadap dasar kerajaan</Text>
                        </Paper>
                      </Box>
                    </Paper>
                  </Box>
                </Box>
                <Box>
                  <Stack gap={"xs"}
                  >
                    <Box>
                      <Paper p={10} w={rem(700)} bg={WARNA.bgNavbar} >
                        <Text fz={"sm"} fw={"bold"}>Analisis Trend AI</Text>
                        <Box pt={10}>
                          <BarChart
                            h={250}
                            data={rp}
                            dataKey="kalangan"
                            withLegend
                            series={[
                              { name: 'Kalangan', color: 'violet.6' },
                              { name: 'Persentase', color: 'blue.6' },
                            ]}
                            tickLine="y"
                          />
                        </Box>
                        <Box pt={10}>
                          <BarChart
                            h={250}
                            data={impak}
                            dataKey="isu"
                            withLegend
                            series={[
                              { name: 'Isu', color: 'violet.6' },
                              { name: 'Impact', color: 'blue.6' },
                              { name: 'Persentase', color: 'green.6' }
                            ]}
                            tickLine="y"
                          />
                        </Box>
                      </Paper>
                    </Box>
                    <Box>
                      <Flex gap={"xs"}>
                        <Box>
                          <Paper p={10} w={rem(350)} bg={WARNA.bgNavbar}>
                            <Text pb={10} fz={"sm"} fw={"bold"}>Ramalan Populariti</Text>
                            <Box>
                              <Box>
                                <Flex align={"center"} justify={"space-between"}>
                                  <Text fz={"sm"}>Urban</Text>
                                  <Flex align={"center"} gap={3}>
                                    <FaArrowUp size={10} color='#11B880' />
                                    <Text fz={"sm"} fw={"bold"} c={"#11B880"}>65%</Text>
                                  </Flex>
                                </Flex>
                                <Progress mt={5} size="sm" value={65} color="#11B880" />
                              </Box>
                              <Box pt={10}>
                                <Flex align={"center"} justify={"space-between"}>
                                  <Text fz={"sm"}>Semi-Urban</Text>
                                  <Flex align={"center"} gap={3}>
                                    <FaArrowRight size={10} color='#F59E0B' />
                                    <Text fz={"sm"} fw={"bold"} c={"#F59E0B"}>45%</Text>
                                  </Flex>
                                </Flex>
                                <Progress mt={5} size="sm" value={45} color="#F59E0B" />
                              </Box>
                              <Box pt={10}>
                                <Flex align={"center"} justify={"space-between"}>
                                  <Text fz={"sm"}>Rural</Text>
                                  <Flex align={"center"} gap={3}>
                                    <FaArrowDown size={10} color='#EF4545' />
                                    <Text fz={"sm"} fw={"bold"} c={"#EF4545"}>35%</Text>
                                  </Flex>
                                </Flex>
                                <Progress mt={5} size="sm" value={65} color="#EF4545" />
                              </Box>
                            </Box>
                          </Paper>
                        </Box>
                        <Box>
                          <Paper p={10} w={rem(340)} bg={WARNA.bgNavbar}>
                            <Box>
                              <Text fz={"sm"} fw={"bold"} pb={10}>Impak Isu</Text>
                              <Box>
                                <Box>
                                  <Flex pb={5} justify={"space-between"} align={"center"}>
                                    <Text fz={"sm"}>Ekonomi</Text>
                                    <Text fw={"bold"} c={"#EF4545"} fz={"xs"}>Tinggi</Text>
                                  </Flex>
                                  <Box pl={250}>
                                    <Progress color={"#EF4545"} value={85} />
                                  </Box>
                                </Box>
                                <Box pt={5}>
                                  <Flex pb={5} justify={"space-between"} align={"center"}>
                                    <Text fz={"sm"}>Sosial</Text>
                                    <Text fw={"bold"} c={"#F59E0B"} fz={"xs"}>Sederhana</Text>
                                  </Flex>
                                  <Box pl={250}>
                                    <Progress color={"#F59E0B"} value={65} />
                                  </Box>
                                </Box>
                                <Box pt={5}>
                                  <Flex pb={5} justify={"space-between"} align={"center"}>
                                    <Text fz={"sm"}>Governans</Text>
                                    <Text fw={"bold"} c={"#11B880"} fz={"xs"}>Rendah</Text>
                                  </Flex>
                                  <Box pl={250}>
                                    <Progress color={"#11B880"} value={30} />
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Paper>
                        </Box>
                      </Flex>
                    </Box>
                    <Box>
                      <Paper p={10} w={rem(700)} bg={WARNA.bgNavbar} >
                        <Text fz={"sm"} fw={"bold"}>Rekomendasi AI</Text>
                        <Box>
                          <Flex gap={100}>
                            <Box>
                              <Text py={5} c={"#989898FF"} fw={"bold"} fz={"sm"}>Jangka Pendek</Text>
                              <List fz={"xs"}>
                                <ListItem>Program bantuan kos sara hidup</ListItem>
                                <ListItem>Kempen media sosial fokus isu semasa</ListItem>
                                <ListItem>Penambahbaikan pusat khidmat rakyat</ListItem>
                              </List>
                            </Box>
                            <Box>
                              <Text py={5} c={"#989898FF"} fw={"bold"} fz={"sm"}>Jangka Panjang</Text>
                              <List fz={"xs"}>
                                <ListItem>Pemerkasaan Ekonomi B40</ListItem>
                                <ListItem>Program latihan digital untuk belia</ListItem>
                                <ListItem>Reformasi institusi kerajaan</ListItem>
                              </List>
                            </Box>
                          </Flex>
                        </Box>
                      </Paper>
                    </Box>
                  </Stack>
                </Box>
              </Flex>
              <Box pt={10}>
                <Paper p={10} w={rem(1015)} bg={WARNA.bgNavbar} >
                  <Text pb={10} fz={"sm"} fw={"bold"}>Penilaian Resiko AI</Text>
                  <Box>
                    <SimpleGrid
                      cols={{ base: 1, sm: 2, lg: 4 }}>
                      <Box>
                        <Paper radius={"sm"} w={rem(240)} bg={"#B3B3B333"} p={10}>
                          <Text fz={"sm"} mb={5}>Risiko Politik</Text>
                          <Flex gap={5} align={"center"}>
                            <Text c={"#EF4545"} fz={"lg"} fw={"bold"}>High</Text>
                            <FaArrowUp size={15} color='#EF4545' />
                            <Text c={"#EF4545"} fz={"lg"} fw={"bold"}>12%</Text>
                          </Flex>
                        </Paper>
                      </Box>
                      <Box>
                        <Paper radius={"sm"} w={rem(240)} bg={"#B3B3B333"} p={10}>
                          <Text fz={"sm"} mb={5}>Risiko Sokongan</Text>
                          <Flex gap={5} align={"center"}>
                            <Text c={"#F59E0B"} fz={"lg"} fw={"bold"}>Med</Text>
                            <FaArrowRight size={15} color='#F59E0B' />
                            <Text c={"#F59E0B"} fz={"lg"} fw={"bold"}>5%</Text>
                          </Flex>
                        </Paper>
                      </Box>
                      <Box>
                        <Paper radius={"sm"} w={rem(240)} bg={"#B3B3B333"} p={10}>
                          <Text fz={"sm"} mb={5}>Risiko Reputasi</Text>
                          <Flex gap={5} align={"center"}>
                            <Text c={"#11B880"} fz={"lg"} fw={"bold"}>Low</Text>
                            <FaArrowDown size={15} color='#11B880' />
                            <Text c={"#11B880"} fz={"lg"} fw={"bold"}>8%</Text>
                          </Flex>
                        </Paper>
                      </Box>
                      <Box>
                        <Paper radius={"sm"} w={rem(240)} bg={"#B3B3B333"} p={10}>
                          <Text fz={"sm"} mb={5}>Risiko Implementasi</Text>
                          <Flex gap={5} align={"center"}>
                            <Text c={"#F59E0B"} fz={"lg"} fw={"bold"}>Med</Text>
                            <FaArrowRight size={15} color='#F59E0B' />
                            <Text c={"#F59E0B"} fz={"lg"} fw={"bold"}>12%</Text>
                          </Flex>
                        </Paper>
                      </Box>
                    </SimpleGrid>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Stack >
        </Box >
      </LayoutBg >
    </Box >
  )
}

export default Content;
