'use client'
import { LayoutBg, WARNA } from '@/module/_global';
import { LineChart } from '@mantine/charts';
import { Box, Button, Flex, Group, Paper, Progress, rem, Select, SimpleGrid, Stack, Text, TextInput } from '@mantine/core';

const data = [
  {
    pru: 'PRU-13 5 Mei 2013',
    Urban: '45',
    SemiUrban: '35',
    Rural: '20',
  },
  {
    pru: 'PRU-14 9 Mei 2018',
    Urban: '50',
    SemiUrban: '40',
    Rural: '10',
  },
  {
    pru: 'PRU-15 19 November 2022',
    Urban: '55',
    SemiUrban: '30',
    Rural: '15',
  },
]

function Content() {
  return (
    <Box>
      <LayoutBg>
        <Box p={20}>
          <Stack gap={"xs"}>
            <Box pb={10}>
              <Flex gap={"xs"} align={"center"} justify={"space-between"}>
                <Box>
                  <Text fw={800} fz={"lg"}>National Popularity Metric</Text>
                  <Text fz={"sm"}>Per Parliamentary Constituency Analysis</Text>
                </Box>
                <Box>
                  <Flex gap={"xs"}>
                    <Box>
                      <Select
                        placeholder="Pick value"
                        data={['Semua Negeri', 'Selangor', 'Johor', 'Sabah', 'Sarawak']}
                        defaultValue="Semua Negeri"
                      />
                    </Box>
                    <Box>
                      <Select
                        placeholder="Pick value"
                        data={['Semua Parlimen', 'Urban', 'Semi-Urban', 'Rural']}
                        defaultValue="Semua Parlimen"
                      />
                    </Box>
                    <Button>Export Data</Button>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box pb={10}>
              <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 4 }}>
                <Box>
                  <Paper radius={"sm"} w={rem(240)} bg={WARNA.bgNavbar} p={10}>
                    <Text fz={"sm"} mb={5}>Jumlah Kawasan</Text>
                    <Text fz={"lg"} fw={"bold"}>222</Text>
                    <Text fz={"xs"} c={"#00A133FF"}>Semua Parlimen</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper radius={"sm"} w={rem(240)} bg={WARNA.bgNavbar} p={10}>
                    <Text fz={"sm"} mb={5}>Kawasan Tepat</Text>
                    <Text fz={"lg"} fw={"bold"}>82</Text>
                    <Text fz={"xs"} c={"#3A80F6"}>37% dari jumlah</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper radius={"sm"} w={rem(240)} bg={WARNA.bgNavbar} p={10}>
                    <Text fz={"sm"} mb={5}>Kawasan Margin Tipis</Text>
                    <Text fz={"lg"} fw={"bold"}>54</Text>
                    <Text fz={"xs"} c={"#DD9207FF"}>24% dari jumlah</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper radius={"sm"} w={rem(240)} bg={WARNA.bgNavbar} p={10}>
                    <Text fz={"sm"} mb={5}>Kawasan Berisiko</Text>
                    <Text fz={"lg"} fw={"bold"}>86</Text>
                    <Text fz={"xs"} c={"#EF4444"}>39% dari jumlah</Text>
                  </Paper>
                </Box>
              </SimpleGrid>
            </Box>
            <Box>
              <Flex gap={"md"}>
                <Box>
                  <Paper h={"132vh"} w={rem(400)} bg={WARNA.bgNavbar} p={20}>
                    <Box>
                      <Flex align={"center"} justify={"space-between"} gap={"xs"}>
                        <Text fz={"sm"} fw={"bold"}>Senarai Parlemen</Text>
                        <TextInput styles={{ input: { backgroundColor: "#FFFFFF1A" } }} size='xs' placeholder={"Cari Parlimen..."} />
                      </Flex>
                    </Box>
                    <Box pt={15}>
                      <Stack>
                        <Paper p={10} bg={"#FFFFFF1A"}>
                          <Flex justify={"space-between"}>
                            <Box>
                              <Text fw={"bold"} fz={"sm"}>P.001 Padang Besar</Text>
                              <Text fz={"xs"}>Perlis</Text>
                            </Box>
                            <Group>
                              <Paper radius={"md"} p={5} bg={"green"}>
                                <Text fz={"xs"}>Tepat</Text>
                              </Paper>
                            </Group>
                          </Flex>
                        </Paper>
                        <Paper p={10} bg={"#FFFFFF1A"}>
                          <Flex justify={"space-between"}>
                            <Box>
                              <Text fw={"bold"} fz={"sm"}>P.002 Kangar</Text>
                              <Text fz={"xs"}>Perlis</Text>
                            </Box>
                            <Group>
                              <Paper radius={"md"} p={6} bg={"orange"}>
                                <Text fz={"xs"}>Tipis</Text>
                              </Paper>
                            </Group>
                          </Flex>
                        </Paper>
                        <Paper p={10} bg={"#FFFFFF1A"}>
                          <Flex justify={"space-between"}>
                            <Box>
                              <Text fw={"bold"} fz={"sm"}>P.003 Arau</Text>
                              <Text fz={"xs"}>Perlis</Text>
                            </Box>
                            <Group>
                              <Paper radius={"md"} p={5} bg={"red"}>
                                <Text fz={"xs"}>Risiko</Text>
                              </Paper>
                            </Group>
                          </Flex>
                        </Paper>
                      </Stack>
                    </Box>
                  </Paper>
                </Box>
                <Box>
                  <Box pb={15}>
                    <Paper h={"57vh"} w={rem(600)} bg={WARNA.bgNavbar} p={20}>
                      <Box>
                        <Text pb={10} fz={"sm"} fw={"bold"}>Trend Populariti Nasional</Text>
                        <Box pt={10}>
                        <LineChart
                          h={300}
                          data={data}
                          dataKey='pru'
                          series={[
                            { name: 'Urban', color: 'red', label: "apa" },
                            { name: 'SemiUrban', color: 'yellow', label: "apa" },
                            { name: 'Rural', color: "blue", label: "apa" },
                          ]}
                          curveType="natural" />
                          </Box>
                      </Box>
                    </Paper>
                  </Box>
                  <Box pb={15}>
                    <Flex gap={"xs"}>
                      <Paper bg={WARNA.bgNavbar} p={20} w={rem(300)}>
                        <Box pt={5}>
                          <Text pb={10} fz={"sm"} fw={"bold"}>Taburan Kawasan</Text>
                          <Box py={10}>
                            <Flex justify={"space-between"} align={"center"}>
                              <Text pb={10} fz={"sm"}>Urban</Text>
                              <Text>45%</Text>
                            </Flex>
                            <Progress value={45} color='blue' />
                          </Box>
                          <Box py={10}>
                            <Flex justify={"space-between"} align={"center"}>
                              <Text pb={10} fz={"sm"}>Semi-Urban</Text>
                              <Text>30%</Text>
                            </Flex>
                            <Progress value={30} color='green' />
                          </Box>
                          <Box py={10}>
                            <Flex justify={"space-between"} align={"center"}>
                              <Text pb={10} fz={"sm"}>Rural</Text>
                              <Text>25%</Text>
                            </Flex>
                            <Progress value={25} color='orange' />
                          </Box>
                        </Box>
                      </Paper>
                      <Paper bg={WARNA.bgNavbar} p={20} w={rem(290)}>
                        <Box pt={5}>
                          <Text pb={10} fz={"sm"} fw={"bold"}>Populariti by Negeri</Text>
                          <Box py={10}>
                            <Flex justify={"space-between"} align={"center"}>
                              <Text pb={10} fz={"sm"}>Selangor</Text>
                              <Text c={"green"}>78%</Text>
                            </Flex>
                          </Box>
                          <Box py={10}>
                            <Flex justify={"space-between"} align={"center"}>
                              <Text pb={10} fz={"sm"}>Johor</Text>
                              <Text c={"green"}>72%</Text>
                            </Flex>
                          </Box>
                          <Box py={10}>
                            <Flex justify={"space-between"} align={"center"}>
                              <Text pb={10} fz={"sm"}>Sabah</Text>
                              <Text c={"orange"}>65%</Text>
                            </Flex>
                          </Box>
                          <Box py={10}>
                            <Flex justify={"space-between"} align={"center"}>
                              <Text pb={10} fz={"sm"}>Sarawak</Text>
                              <Text c={"orange"}>62%</Text>
                            </Flex>
                          </Box>
                          <Box py={10}>
                            <Flex justify={"space-between"} align={"center"}>
                              <Text pb={10} fz={"sm"}>Kedah</Text>
                              <Text c={"red"}>45%</Text>
                            </Flex>
                          </Box>
                        </Box>
                      </Paper>
                    </Flex>
                  </Box>
                  <Box>
                    <Paper bg={WARNA.bgNavbar} p={20} w={rem(600)}>
                      <Box pt={5}>
                        <Text pb={10} fz={"sm"} fw={"bold"}>Analisis Risiko</Text>
                      </Box>
                      <Box>
                        <Flex gap={"xs"} justify={"space-around"}>
                          <Box>
                            <Paper bg={"#FFFFFF1A"} p={10} w={rem(180)}>
                              <Text fw={"bold"} fz={"sm"}>Kawasan Tepat</Text>
                              <Text pt={5} c={"green"} fz={"h1"}>37%</Text>
                              <Text fz={"xs"}>82 kawasan</Text>
                            </Paper>
                          </Box>
                          <Box>
                            <Paper bg={"#FFFFFF1A"} p={10} w={rem(180)}>
                              <Text fw={"bold"} fz={"sm"}>Margin Tipis</Text>
                              <Text pt={5} c={"orange"} fz={"h1"}>24%</Text>
                              <Text fz={"xs"}>54 kawasan</Text>
                            </Paper>
                          </Box>
                          <Box>
                            <Paper bg={"#FFFFFF1A"} p={10} w={rem(180)}>
                              <Text fw={"bold"} fz={"sm"}>Berisiko</Text>
                              <Text pt={5} c={"red"} fz={"h1"}>39%</Text>
                              <Text fz={"xs"}>86 kawasan</Text>
                            </Paper>
                          </Box>
                        </Flex>
                      </Box>
                    </Paper>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Stack>
        </Box>
      </LayoutBg>
    </Box>
  );
}

export default Content;
