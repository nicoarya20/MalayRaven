'use client'
import { LayoutBg, WARNA } from '@/module/_global';
import { Box, Flex, Image, Paper, rem, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6';

function Content() {
  return (
    <Box>
      <LayoutBg>
        <Box p={20}>
          <Stack gap={"xs"}>
            <Box pb={10}>
              <Flex gap={"xs"} align={"center"} justify={"space-between"}>
                <Box>
                  <Text fw={800} fz={"lg"}>PREDICTION METRICS</Text>
                  <Text fz={"sm"}>Analisis Prediktif PRU-16</Text>
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
                    <Text fz={"sm"}>22 November 2024</Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box pb={10}>
              <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 4 }}>
                <Box>
                  <Paper withBorder style={{ borderColor: "#3B80F7" }} radius={"sm"} w={rem(240)} bg={WARNA.bgMain} p={10}>
                    <Text fz={"sm"} mb={2}>Confidence Store</Text>
                    <Text fz={"h3"} fw={"bold"}>85.2%</Text>
                    <Text fz={"sm"} c={"#3B80F7"}>Model Accuracy</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper withBorder style={{ borderColor: "#11B880" }} radius={"sm"} w={rem(240)} bg={WARNA.bgMain} p={8}>
                    <Text fz={"sm"} mb={5}>Jangkaan Turnout</Text>
                    <Text fz={"h3"} fw={"bold"}>82.5%</Text>
                    <Flex align={"center"} gap={3}>
                      <FaArrowUp size={12} color='#11B880' />
                      <Text fz={"sm"} c={"#11B880"}>3.2% dari PRU-15</Text>
                    </Flex>
                  </Paper>
                </Box>
                <Box>
                  <Paper withBorder style={{ borderColor: "#8B5CF6" }} radius={"sm"} w={rem(240)} bg={WARNA.bgMain} p={10}>
                    <Text fz={"sm"} mb={2}>Margin of Error</Text>
                    <Text fz={"h3"} fw={"bold"}>±2.8%</Text>
                    <Text fz={"sm"} c={"#8B5CF6"}>Model Accuracy</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper withBorder style={{ borderColor: "#F59E0B" }} radius={"sm"} w={rem(240)} bg={WARNA.bgMain} p={10}>
                    <Text fz={"sm"} mb={2}>Volatile Seats</Text>
                    <Text fz={"h3"} fw={"bold"}>45</Text>
                    <Text fz={"sm"} c={"#F59E0B"}>20.3% total</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper withBorder style={{ borderColor: "#EF4444" }} radius={"sm"} w={rem(240)} bg={WARNA.bgMain} p={10}>
                    <Text fz={"sm"} mb={5}>Sample Size</Text>
                    <Text fz={"h3"} fw={"bold"}>125K</Text>
                    <Text fz={"sm"} c={"#EF4444"}>Last 30 days</Text>
                  </Paper>
                </Box>
              </SimpleGrid>
            </Box>
            <Box>
              <Flex gap={"md"}>
                <Box>
                  <Box pb={15}>
                    <Paper h={"62vh"} w={rem(600)} bg={WARNA.bgNavbar} p={20}>
                      <Box>
                        <Text fz={"sm"} fw={"bold"}>Historical Data Analysis</Text>
                        <Box pt={10}>
                          <Stack justify='center' align='center'>
                            <Image radius={"lg"} src={"assets/image/Malaysiani.jpeg"} alt='' w={580} />
                          </Stack>
                          <Box pt={15}>
                            <Flex align={"center"} gap={"xs"}>
                              <Box>
                                <Paper h={"11.5vh"} w={rem(180)} bg={"#374050"} p={10}>
                                  <Text fz={"sm"}>PRU13</Text>
                                  <Text fz={"h4"} fw={"bold"}>84.8%</Text>
                                  <Text fz={"xs"}>Turnout</Text>
                                </Paper>
                              </Box>
                              <Box>
                                <Paper h={"11.5vh"} w={rem(180)} bg={"#374050"} p={10}>
                                  <Text fz={"sm"}>PRU14</Text>
                                  <Text fz={"h4"} fw={"bold"}>84.3%</Text>
                                  <Text fz={"xs"}>Turnout</Text>
                                </Paper>
                              </Box>
                              <Box>
                                <Paper h={"11.5vh"} w={rem(180)} bg={"#374050"} p={10}>
                                  <Text fz={"sm"}>PRU15</Text>
                                  <Text fz={"h4"} fw={"bold"}>79.3%</Text>
                                  <Text fz={"xs"}>Turnout</Text>
                                </Paper>
                              </Box>
                            </Flex>
                          </Box>
                        </Box>
                      </Box>
                    </Paper>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <Paper h={"22vh"} w={rem(400)} bg={WARNA.bgNavbar} p={15}>
                      <Text fz={"md"} fw={"bold"}>Current Trend</Text>
                      <Box pt={10}>
                        <Flex justify={"space-between"} align={"center"}>
                          <Text fz={"sm"} fw={"bold"} c={"#A1A1A1FF"}>Sokongan Kerajaan</Text>
                          <Flex gap={3} align={"center"}>
                            <FaArrowUp size={12} color='#11B880' />
                            <Text c={"#11B880"} fz={"sm"}>48.5%</Text>
                          </Flex>
                        </Flex>
                      </Box>
                      <Box pt={15}>
                        <Flex justify={"space-between"} align={"center"}>
                          <Text fz={"sm"} fw={"bold"} c={"#A1A1A1FF"}>Sokongan Pembangkang</Text>
                          <Flex gap={3} align={"center"}>
                            <FaArrowDown size={12} color='#EF4545' />
                            <Text c={"#EF4545"} fz={"sm"}>45.2%</Text>
                          </Flex>
                        </Flex>
                      </Box>
                      <Box pt={15}>
                        <Flex justify={"space-between"} align={"center"}>
                          <Text fz={"sm"} fw={"bold"} c={"#A1A1A1FF"}>Undecided</Text>
                          <Text c={"#F59E0B"} fz={"sm"}>6.3%</Text>
                        </Flex>
                      </Box>
                    </Paper>
                  </Box>
                  <Box pt={15}>
                    <Paper h={"30vh"} w={rem(400)} bg={WARNA.bgNavbar} p={15}>
                      <Text fz={"md"} fw={"bold"}>Pergerakan Pengundi</Text>
                      <Box pt={10}>
                        <Paper h={"6vh"} w={rem(370)} bg={"#374050"} p={10}>
                          <Flex justify={"space-between"} align={"center"}>
                            <Text fz={"sm"} fw={"bold"} c={"#A1A1A1FF"}>Swing Voters</Text>
                            <Text c={"#F59E0B"} fz={"sm"}>15.2%</Text>
                          </Flex>
                        </Paper>
                      </Box>
                      <Box pt={10}>
                        <Paper h={"6vh"} w={rem(370)} bg={"#374050"} p={10}>
                          <Flex justify={"space-between"} align={"center"}>
                            <Text fz={"sm"} fw={"bold"} c={"#A1A1A1FF"}>New Voters</Text>
                            <Text c={"#3B80F7"} fz={"sm"}>12.8%</Text>
                          </Flex>
                        </Paper>
                      </Box>
                      <Box pt={10}>
                        <Paper h={"6vh"} w={rem(370)} bg={"#374050"} p={10}>
                          <Flex justify={"space-between"} align={"center"}>
                            <Text fz={"sm"} fw={"bold"} c={"#A1A1A1FF"}>Loyal Base</Text>
                            <Text c={"#11B880"} fz={"sm"}>72%</Text>
                          </Flex>
                        </Paper>
                      </Box>
                    </Paper>
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex gap={"md"}>
                <Box>
                  <Box pb={15}>
                    <Paper h={"39vh"} w={rem(500)} bg={WARNA.bgNavbar} p={20}>
                      <Text fz={"lg"} fw={"bold"}>Jangkaan Turnout</Text>
                      <Box pt={10}>
                        <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }}>
                          <Box>
                            <Paper h={"13vh"} w={rem(220)} bg={"#2F3844"} p={10}>
                              <Text fw={"bold"} fz={"sm"}>Urban</Text>
                              <Text pt={8} c={"#11B880"} fw={"bold"} fz={"xl"}>85%</Text>
                              <Text fz={"xs"}>Expected Turnout</Text>
                            </Paper>
                          </Box>
                          <Box>
                            <Paper h={"13vh"} w={rem(220)} bg={"#2F3844"} p={10}>
                              <Text fw={"bold"} fz={"sm"}>Semi-Urban</Text>
                              <Text pt={8} c={"#3A7EEF"} fw={"bold"} fz={"xl"}>82%</Text>
                              <Text fz={"xs"}>Expected Turnout</Text>
                            </Paper>
                          </Box>
                          <Box>
                            <Paper h={"13vh"} w={rem(220)} bg={"#2F3844"} p={10}>
                              <Text fw={"bold"} fz={"sm"}>Rural</Text>
                              <Text pt={8} c={"#F59E0B"} fw={"bold"} fz={"xl"}>78%</Text>
                              <Text fz={"xs"}>Expected Turnout</Text>
                            </Paper>
                          </Box>
                          <Box>
                            <Paper h={"13vh"} w={rem(220)} bg={"#2F3844"} p={10}>
                              <Text fw={"bold"} fz={"sm"}>Overall</Text>
                              <Text pt={8} c={"#8B5CF6"} fw={"bold"} fz={"xl"}>82.5%</Text>
                              <Text fz={"xs"}>Expected Turnout</Text>
                            </Paper>
                          </Box>
                        </SimpleGrid>
                      </Box>
                    </Paper>
                  </Box>
                </Box>
                <Box pb={15}>
                  <Paper h={"39vh"} w={rem(500)} bg={WARNA.bgNavbar} p={20}>
                    <Text fz={"lg"} fw={"bold"}>Winning Probability</Text>
                    <Box pt={10}>
                      <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }}>
                        <Box>
                          <Paper h={"13vh"} w={rem(220)} bg={"#2F3844"} p={10}>
                            <Text fz={"sm"}>Kerajaan</Text>
                            <Flex pt={10} justify={"space-between"}>
                              <Text fw={"bold"} fz={"sm"}>Simple Majority</Text>
                              <Text c={"#11B880"} fw={"bold"} fz={"sm"}>65%</Text>
                            </Flex>
                            <Flex justify={"space-between"}>
                              <Text fw={"bold"} fz={"sm"}>2/3 Majority</Text>
                              <Text c={"#F59E0B"} fw={"bold"} fz={"sm"}>25%</Text>
                            </Flex>
                          </Paper>
                        </Box>
                        <Box>
                          <Paper h={"13vh"} w={rem(220)} bg={"#2F3844"} p={10}>
                            <Text fz={"sm"}>Pembangkang</Text>
                            <Flex pt={10} justify={"space-between"}>
                              <Text fw={"bold"} fz={"sm"}>Simple Majority</Text>
                              <Text c={"#EF4545"} fw={"bold"} fz={"sm"}>32%</Text>
                            </Flex>
                            <Flex justify={"space-between"}>
                              <Text fw={"bold"} fz={"sm"}>Hung Parliament</Text>
                              <Text c={"#F59E0B"} fw={"bold"} fz={"sm"}>3%</Text>
                            </Flex>
                          </Paper>
                        </Box>
                      </SimpleGrid>
                    </Box>
                  </Paper>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Box pb={15}>
                <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
                  <Box pt={10}>
                    <Paper h={"22vh"} w={rem(250)} bg={WARNA.bgNavbar} p={20}>
                      <Text pb={10} fz={"sm"} fw={"bold"}>Economic Impact</Text>
                      <Box>
                        <Flex pb={5} justify={"space-between"} align={"center"}>
                          <Text fz={"sm"}>Cost of Living</Text>
                          <Text c={"#EF4545"} fw={"bold"} fz={"sm"}>High</Text>
                        </Flex>
                      </Box>
                      <Box pt={10}>
                        <Flex pb={5} justify={"space-between"} align={"center"}>
                          <Text fz={"sm"}>Employment</Text>
                          <Text c={"#F59E0B"} fw={"bold"} fz={"sm"}>Medium</Text>
                        </Flex>
                      </Box>
                      <Box pt={10}>
                        <Flex pb={5} justify={"space-between"} align={"center"}>
                          <Text fz={"sm"}>Growth Rate</Text>
                          <Text c={"#11B880"} fw={"bold"} fz={"sm"}>Positive</Text>
                        </Flex>
                      </Box>
                    </Paper>
                  </Box>
                  <Box pt={10}>
                    <Paper h={"22vh"} w={rem(250)} bg={WARNA.bgNavbar} p={20}>
                      <Text pb={10} fz={"sm"} fw={"bold"}>Demographic Shift</Text>
                      <Box>
                        <Flex pb={5} justify={"space-between"} align={"center"}>
                          <Text fz={"sm"}>Youth Vote</Text>
                          <Text c={"#3B80F7"} fw={"bold"} fz={"sm"}>+15%</Text>
                        </Flex>
                      </Box>
                      <Box pt={10}>
                        <Flex pb={5} justify={"space-between"} align={"center"}>
                          <Text fz={"sm"}>Urban-Rural</Text>
                          <Text c={"#F59E0B"} fw={"bold"} fz={"sm"}>65:35</Text>
                        </Flex>
                      </Box>
                      <Box pt={10}>
                        <Flex pb={5} justify={"space-between"} align={"center"}>
                          <Text fz={"sm"}>First Time</Text>
                          <Text c={"#8B5CF6"} fw={"bold"} fz={"sm"}>18%</Text>
                        </Flex>
                      </Box>
                    </Paper>
                  </Box>
                  <Box pt={10}>
                    <Paper h={"22vh"} w={rem(250)} bg={WARNA.bgNavbar} p={20}>
                      <Text pb={10} fz={"sm"} fw={"bold"}>Political Climate</Text>
                      <Box>
                        <Flex pb={5} justify={"space-between"} align={"center"}>
                          <Text fz={"sm"}>Govt Satisfaction</Text>
                          <Text c={"#11B880"} fw={"bold"} fz={"sm"}>52%</Text>
                        </Flex>
                      </Box>
                      <Box pt={10}>
                        <Flex pb={5} justify={"space-between"} align={"center"}>
                          <Text fz={"sm"}>Opposition Unity</Text>
                          <Text c={"#F59E0B"} fw={"bold"} fz={"sm"}>Mixed</Text>
                        </Flex>
                      </Box>
                      <Box pt={10}>
                        <Flex pb={5} justify={"space-between"} align={"center"}>
                          <Text fz={"sm"}>Key Issues</Text>
                          <Text c={"#EF4545"} fw={"bold"} fz={"sm"}>High</Text>
                        </Flex>
                      </Box>
                    </Paper>
                  </Box>
                  <Box pt={10}>
                    <Paper h={"22vh"} w={rem(250)} bg={WARNA.bgNavbar} p={20}>
                      <Text pb={10} fz={"sm"} fw={"bold"}>Regional Impact</Text>
                      <Box>
                        <Flex pb={5} justify={"space-between"} align={"center"}>
                          <Text fz={"sm"}>Peninsula</Text>
                          <Text c={"#F59E0B"} fw={"bold"} fz={"sm"}>Split</Text>
                        </Flex>
                      </Box>
                      <Box pt={10}>
                        <Flex pb={5} justify={"space-between"} align={"center"}>
                          <Text fz={"sm"}>Sabah</Text>
                          <Text c={"#3B80F7"} fw={"bold"} fz={"sm"}>Mixed</Text>
                        </Flex>
                      </Box>
                      <Box pt={10}>
                        <Flex pb={5} justify={"space-between"} align={"center"}>
                          <Text fz={"sm"}>Sarawak</Text>
                          <Text c={"#11B880"} fw={"bold"} fz={"sm"}>Stable</Text>
                        </Flex>
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
