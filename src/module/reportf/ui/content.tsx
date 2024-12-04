'use client'
import { LayoutBg, WARNA } from '@/module/_global';
import { Box, Button, Flex, Indicator, Paper, Progress, rem, SimpleGrid, Stack, Text } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import React from 'react';
import { FaArrowUp, FaCalendar } from 'react-icons/fa6';

function Content() {
  const [value, setValue] = React.useState<Date | null>(null);
  const [value2, setValue2] = React.useState<Date | null>(null);
  return (
    <Box>
      <LayoutBg>
        <Box p={20}>
          <Stack gap={"xs"}>
            <Box pb={10}>
              <Flex gap={"xs"} align={"center"} justify={"space-between"}>
                <Box>
                  <Text fw={800} fz={"lg"}>Live Dashboard</Text>
                  <Text fz={"sm"}>Last Updated: 22 Nov 2024, 15:30 MYT</Text>
                </Box>
                <Box>
                  <Flex gap={"xs"}>
                    <Button bg={"#3B81F6"}>Generate Report</Button>
                    <Button bg={"#10B980"}>Export Data</Button>
                    <Indicator radius={"xl"} color='red' label={"3"} size={17}>
                      <Button bg={WARNA.bgMain} style={{ borderColor: "#EE4544", color: "#EE4544" }}>Alert</Button>
                    </Indicator>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box pb={10}>
              <Paper bg={WARNA.bgMain} withBorder style={{ borderColor: "#F77070" }} radius={"sm"} w={rem(1015)} p={20}>
                <Flex justify={"space-between"} align={"center"}>
                  <Box>
                    <Text fw={"bold"} fz={"lg"}>Emergency Alerts</Text>
                    <Text c={"#F77070"} fz={"sm"}>3 Active Alerts Requiring Attention</Text>
                  </Box>
                  <Box>
                    <Flex gap={"lg"} align={"center"}>
                      <Box>
                        <Text c={"#F77070"} fz={"xs"}>High Priority</Text>
                        <Text ta={"center"} fz={"sm"} fw={"bold"}>1</Text>
                      </Box>
                      <Box>
                        <Text c={"#F8BD24"} fz={"xs"}>Medium</Text>
                        <Text ta={"center"} fz={"sm"} fw={"bold"}>1</Text>
                      </Box>
                      <Box>
                        <Text c={"#5EA4F9"} fz={"xs"}>Low</Text>
                        <Text ta={"center"} fz={"sm"} fw={"bold"}>1</Text>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Paper>
            </Box>
            <Box pb={10}>
              <SimpleGrid cols={{ base: 1, sm: 1, md: 2, lg: 3 }}>
                <Box>
                  <Paper h={rem(410)} pos={"relative"} radius={"sm"} w={rem(320)} bg={WARNA.bgNavbar} p={15}>
                    <Flex mb={10} justify={"space-between"} align={"center"}>
                      <Text fz={"md"} fw={"bold"}>Daily Summary</Text>
                      <Text fz={"sm"}>22 Nov 2024</Text>
                    </Flex>
                    <Paper pos={"relative"} mb={15} radius={"sm"} w={rem(290)} bg={"#364051D9"} p={10}>
                      <Flex justify={"space-between"} align={"center"} pb={10}>
                        <Text fz={"sm"} fw={"bold"}>Media Mentions</Text>
                        <Flex gap={3} align={"center"}>
                          <FaArrowUp size={10} color='#10B980' />
                          <Text fz={"sm"} c={"#10B980"}>1,245</Text>
                        </Flex>
                      </Flex>
                      <Flex justify={"space-between"} align={"center"} pb={10}>
                        <Text fz={"sm"} fw={"bold"}>Social Engagement</Text>
                        <Flex gap={3} align={"center"}>
                          <FaArrowUp size={10} color='#3B81F6' />
                          <Text fz={"sm"} c={"#3B81F6"}>15.2K</Text>
                        </Flex>
                      </Flex>
                      <Flex justify={"space-between"} align={"center"} pb={10}>
                        <Text fz={"sm"} fw={"bold"}>Sentiment Score</Text>
                        <Flex gap={3} align={"center"}>
                          <Text fz={"sm"} c={"#F59F0A"}>65%</Text>
                        </Flex>
                      </Flex>
                    </Paper>
                    <Paper radius={"sm"} w={rem(290)} bg={"#364051D9"} p={10}>
                      <Text fw={"bold"} pb={10} fz={"md"}>Top Issues Today</Text>
                      <Flex justify={"space-between"} align={"center"} pb={10}>
                        <Text fz={"sm"} fw={"bold"}>Ekonomi</Text>
                        <Flex gap={3} align={"center"}>
                          <Text fz={"sm"} c={"#F77070"}>Critical</Text>
                        </Flex>
                      </Flex>
                      <Flex justify={"space-between"} align={"center"} pb={10}>
                        <Text fz={"sm"} fw={"bold"}>Kos Sara Hidup</Text>
                        <Flex gap={3} align={"center"}>
                          <Text fz={"sm"} c={"#F59F0A"}>High</Text>
                        </Flex>
                      </Flex>
                      <Flex justify={"space-between"} align={"center"} pb={10}>
                        <Text fz={"sm"} fw={"bold"}>Perumahan</Text>
                        <Flex gap={3} align={"center"}>
                          <Text fz={"sm"} c={"#3B81F6"}>Medium</Text>
                        </Flex>
                      </Flex>
                    </Paper>
                  </Paper>

                </Box>
                <Box>
                  <Paper radius={"sm"} w={rem(320)} bg={WARNA.bgNavbar} p={15}>
                    <Flex mb={10} justify={"space-between"} align={"center"}>
                      <Text fz={"md"} fw={"bold"}>Weekly Trend</Text>
                      <Text fz={"sm"}>Week 47</Text>
                    </Flex>
                    <Paper mb={15} radius={"sm"} w={rem(290)} bg={"#364051D9"} p={10}>
                      <Flex justify={"space-between"} align={"center"} pb={10}>
                        <Text fz={"sm"} fw={"bold"}>Support Trend</Text>
                        <Flex gap={3} align={"center"}>
                          <FaArrowUp size={10} color='#10B980' />
                          <Text fz={"sm"} c={"#10B980"}>3.2%</Text>
                        </Flex>
                      </Flex>
                      <Box pt={5}>
                        <Progress color={"#10B980"} size={"sm"} value={70} />
                      </Box>
                    </Paper>
                    <Paper mb={15} radius={"sm"} w={rem(290)} bg={"#364051D9"} p={50}>
                      <Text pb={10} ta={"center"} fz={"md"}>Weekly Trend Chart</Text>
                    </Paper>
                    <Paper mb={15} radius={"sm"} w={rem(290)} bg={"#364051D9"} p={10}>
                      <Text pb={10} fz={"sm"} fw={"bold"}>Key Metrics</Text>
                      <Flex justify={"space-between"} align={"center"} pb={10}>
                        <Flex gap={"xl"} align={"center"}>
                          <Box>
                            <Text fz={"sm"}>Engagement</Text>
                            <Text fz={"sm"} c={"#10B980"}>+12.5%</Text>
                          </Box>
                          <Box>
                            <Text fz={"sm"}>Sentiment</Text>
                            <Text fz={"sm"} c={"#F59F0A"}>+5.2%</Text>
                          </Box>
                        </Flex>
                      </Flex>
                    </Paper>
                  </Paper>

                </Box>
                <Box>
                  <Paper h={rem(410)} radius={"sm"} w={rem(323)} bg={WARNA.bgNavbar} p={15}>
                    <Flex mb={10} justify={"space-between"} align={"center"}>
                      <Text fz={"md"} fw={"bold"}>Monthly Analisis</Text>
                      <Text fz={"sm"}>November 2024</Text>
                    </Flex>
                    <Paper mb={15} radius={"sm"} w={rem(290)} bg={"#364051D9"} p={10}>
                      <Text fw={"bold"} pb={10} fz={"sm"}>Performance Overview</Text>
                      <Flex pl={32} gap={"xl"} align={"center"} pb={10}>
                        <Box>
                          <Text ta={"center"} fz={"h2"} c={"#10B980"} fw={"bold"}>75%</Text>
                          <Text ta={"center"} fz={"xs"}>Target Achieved</Text>
                        </Box>
                        <Box>
                          <Text ta={"center"} fz={"h2"} c={"#3B81F6"} fw={"bold"}>82%</Text>
                          <Text ta={"center"} fz={"xs"}>Growth Rate</Text>
                        </Box>
                      </Flex>

                    </Paper>
                    <Paper radius={"sm"} w={rem(290)} bg={"#364051D9"} p={10}>
                      <Text pb={10} fz={"sm"} fw={"bold"}>Key Achievements</Text>
                      <Flex justify={"space-between"} align={"center"} pb={10}>
                        <Text fz={"sm"} >Out Reach</Text>
                        <Text fz={"sm"} c={"#10B980"}>12.5M</Text>
                      </Flex>
                      <Flex justify={"space-between"} align={"center"} pb={10}>
                        <Text fz={"sm"}>Programs</Text>
                        <Text fz={"sm"} c={"#3B81F6"}>245</Text>
                      </Flex>
                      <Flex justify={"space-between"} align={"center"} pb={10}>
                        <Text fz={"sm"} >Conversion</Text>
                        <Text fz={"sm"} c={"#F59F0A"}>8.2%</Text>
                      </Flex>
                    </Paper>
                  </Paper>

                </Box>
              </SimpleGrid>
            </Box>
            <Box pb={10}>
              <Flex gap={"lg"}>
                <Paper radius={"sm"} w={rem(700)} bg={WARNA.bgNavbar} p={15}>
                  <Flex align={"center"} justify={"space-between"}>
                    <Text fz={"md"} fw={"bold"}>Custom Period Report</Text>
                    <Flex align={"center"} gap={"xs"}>
                      <DateInput
                        value={value}
                        onChange={setValue}
                        placeholder={'dd/mm/yyyy'}
                        rightSection={<FaCalendar size={13} color='gray' />}
                        styles={{ input: { backgroundColor: "#333C4DBA", color: "white" } }}
                        size='xs'
                      />
                      <DateInput
                        value={value2}
                        onChange={setValue2}
                        placeholder={'dd/mm/yyyy'}
                        rightSection={<FaCalendar size={13} color='gray' />}
                        styles={{ input: { backgroundColor: "#333C4DBA", color: "white" } }}
                        size='xs'
                      />
                    </Flex>
                  </Flex>
                  <Flex gap={"xl"} pt={20} align={"center"}>
                    <Paper radius={"sm"} w={rem(260)} bg={"#364051D9"} p={15}>
                      <Text pb={10} fz={"sm"} fw={"bold"}>Comparion Analysis</Text>
                      <Flex justify={"space-between"} align={"center"} pb={10}>
                        <Text fz={"sm"} >Support Growth</Text>
                        <Text fz={"sm"} c={"#10B980"}>+15.2%</Text>
                      </Flex>
                      <Flex justify={"space-between"} align={"center"} pb={10}>
                        <Text fz={"sm"} >Engagement Rate</Text>
                        <Text fz={"sm"} c={"#3B81F6"}>+22.5%</Text>
                      </Flex>
                      <Flex justify={"space-between"} align={"center"} pb={10}>
                        <Text fz={"sm"} >Issue Resolution</Text>
                        <Text fz={"sm"} c={"#F49E0A"}>85%</Text>
                      </Flex>
                    </Paper>
                    <Paper radius={"sm"} w={rem(260)} bg={"#364051D9"} p={15}>
                      <Text pb={10} fz={"sm"} fw={"bold"}>Comparion Analysis</Text>
                      <Flex justify={"space-between"} align={"center"} pb={10}>
                        <Text fz={"sm"} >Support Growth</Text>
                        <Text fz={"sm"} c={"#10B980"}>+15.2%</Text>
                      </Flex>
                      <Flex justify={"space-between"} align={"center"} pb={10}>
                        <Text fz={"sm"} >Engagement Rate</Text>
                        <Text fz={"sm"} c={"#3B81F6"}>+22.5%</Text>
                      </Flex>
                      <Flex justify={"space-between"} align={"center"} pb={10}>
                        <Text fz={"sm"} >Issue Resolution</Text>
                        <Text fz={"sm"} c={"#F49E0A"}>85%</Text>
                      </Flex>
                    </Paper>
                  </Flex>
                </Paper>
                <Paper radius={"sm"} w={rem(500)} bg={WARNA.bgNavbar} p={15}>
                  <Box pb={10}>
                    <Flex align={"center"} justify={"space-between"}>
                      <Text fz={"md"} fw={"bold"}>Anomaly Detection</Text>
                      <Box>
                        <Flex gap={"5"} align={"center"}>
                          <Text c={"#EF4444"} fz={"sm"}>3 Active Anomalies</Text>
                          <Paper p={5} bg={"#EF4444"}>
                            <Text fz={10}>High Priority</Text>
                          </Paper>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                  <Box>
                    <Paper mb={15} style={{ borderColor: "#EF4444" }} withBorder radius={"sm"} bg={WARNA.bgNavbar} p={10}>
                      <Flex pb={10} align={"center"} justify={"space-between"}>
                        <Box>
                          <Text fz={"sm"} fw={"bold"}>Unusual Sentiment Shift</Text>
                          <Text fz={"sm"} c={"#7D7A7AFF"} >Detected in Northern Region</Text>
                        </Box>
                        <Text fz={"sm"} c={"#EF4444"}>Critical</Text>
                      </Flex>
                    </Paper>
                    <Paper mb={15} style={{ borderColor: "#F49E0A" }} withBorder radius={"sm"} bg={WARNA.bgNavbar} p={10}>
                      <Flex pb={10} align={"center"} justify={"space-between"}>
                        <Box>
                          <Text fz={"sm"} fw={"bold"}>Engagement Spike</Text>
                          <Text fz={"sm"} c={"#7D7A7AFF"} >Abnormal Social Media Activity</Text>
                        </Box>
                        <Text fz={"sm"} c={"#F49E0A"}>Medium</Text>
                      </Flex>
                    </Paper>
                    <Paper style={{ borderColor: "#3B81F6" }} withBorder radius={"sm"} bg={WARNA.bgNavbar} p={10}>
                      <Flex pb={10} align={"center"} justify={"space-between"}>
                        <Box>
                          <Text fz={"sm"} fw={"bold"}>Data Pattern Change</Text>
                          <Text fz={"sm"} c={"#7D7A7AFF"} >Support Level Fluctuation</Text>
                        </Box>
                        <Text fz={"sm"} c={"#3B81F6"}>Low</Text>
                      </Flex>
                    </Paper>
                  </Box>
                </Paper>
              </Flex>
            </Box>
          </Stack>
        </Box>
      </LayoutBg>
    </Box>
  );
}

export default Content;
