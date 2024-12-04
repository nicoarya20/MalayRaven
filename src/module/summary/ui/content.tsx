import { LayoutBg, WARNA } from '@/module/_global';
import { Box, Button, Flex, Paper, Progress, rem, SimpleGrid, Stack, Table, TableTbody, TableTd, TableTh, TableThead, TableTr, Text } from '@mantine/core';


const elements = [

  {
    negeri: "SELANGOR",
    jp: "3,677,848",
    pa: "3,508,824",
    keyakinan: "1,179,039",
    sokongan: "881,877",
    positif: "794,681"
  },
  {
    negeri: "JOHOR",
    jp: "2,482,538",
    pa: "2,339,682",
    keyakinan: "862,285",
    sokongan: "676,018",
    positif: "588,483"
  },
  {
    negeri: "SABAH",
    jp: "1,597,613",
    pa: "1,435,713",
    keyakinan: "431,049",
    sokongan: "336,240",
    positif: "243,578"
  },
  {
    negeri: "SARAWAK",
    jp: "1,017,251",
    pa: "969,026",
    keyakinan: "270,694",
    sokongan: "222,143",
    positif: "145,269"
  },
  {
    negeri: "PERAK",
    jp: "1,503,981",
    pa: "1,485,250",
    keyakinan: "320,554",
    sokongan: "283,077",
    positif: "213,239"
  }


]
function Content() {
  const rows = elements.map((element) => (
    <TableTr key={element.negeri}>
      <TableTd >{element.negeri}</TableTd>
      <TableTd >{element.jp}</TableTd>
      <TableTd>{element.pa}</TableTd>
      <TableTd>{element.keyakinan}</TableTd>
      <TableTd>{element.sokongan}</TableTd>
      <TableTd>{element.positif}</TableTd>
    </TableTr>
  ));
  return (
    <Box>
      <LayoutBg>
        <Box p={20}>
          <Stack gap={"xs"}>
            <Box pb={10}>
              <Flex gap={"xs"} align={"center"} justify={"space-between"}>
                <Box>
                  <Text fw={800} fz={"lg"}>Emotional Spectrum Summary</Text>
                  <Text fz={"sm"}>Last Updated: 22 November 2024 11:24 GMT+8</Text>
                </Box>
                <Box>
                  <Flex gap={"xs"}>
                    <Button>Today</Button>
                    <Button>Week</Button>
                    <Button>Month</Button>
                    <Button>Custom</Button>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box pb={10}>
              <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 3 }}>
                <Box>
                  <Paper style={{ borderColor: "#00A133FF"}} withBorder radius={"sm"} w={rem(320)} bg={WARNA.bgMain} p={10}>
                    <Text fw={"bold"} fz={"md"} mb={5}>POSITIF</Text>
                    <Text fz={"h1"} c={"#00A133FF"} fw={"bold"}>47.24%</Text>
                    <Text fz={"xs"} >Sentimen Utama</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper style={{ borderColor: "#909090FF"}} withBorder radius={"sm"} w={rem(320)} bg={WARNA.bgNavbar} p={10}>
                    <Text fw={"bold"} fz={"md"} mb={5}>NEUTRAL</Text>
                    <Text fz={"h1"} c={"#909090FF"} fw={"bold"}>13.56%</Text>
                    <Text fz={"xs"} >Sentimen Seimbang</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper style={{ borderColor: "#F52B11FF"}} withBorder radius={"sm"} w={rem(320)} bg={WARNA.bgMain} p={10}>
                    <Text fw={"bold"} fz={"md"} mb={5}>NEGATIF</Text>
                    <Text fz={"h1"} c={"#F52B11FF"} fw={"bold"}>39.20%</Text>
                    <Text fz={"xs"} >Sentimen Kritikal</Text>
                  </Paper>
                </Box>
              </SimpleGrid>
            </Box>
            <Box>
              <Paper p={20} bg={WARNA.bgNavbar}>
                <Text pb={20} fw={"bold"}>Analisis 5 Wilayah Tertinggi</Text>
                <Table>
                  <TableThead>
                    <TableTr>
                      <TableTh c={"#9C9999FF"}>Negeri</TableTh>
                      <TableTh c={"#9C9999FF"}>Jumlah Pengundi</TableTh>
                      <TableTh c={"#9C9999FF"}>Pengundi Aktif</TableTh>
                      <TableTh c={"#9C9999FF"}>Keyakinan</TableTh>
                      <TableTh c={"#9C9999FF"}>Sokongan</TableTh>
                      <TableTh c={"#9C9999FF"}>Positif</TableTh>
                    </TableTr>
                  </TableThead>
                  <TableTbody>{rows}</TableTbody>
                </Table>
              </Paper>
            </Box>
            <Box pt={15}>
              <Flex justify={"space-around"} gap={"sm"}>
                <Box>
                  <Paper h={"47vh"} w={rem(335)} bg={WARNA.bgNavbar} p={20}>
                    <Stack>
                      <Text fw={"bold"}>Indikator Sokongan</Text>
                      <Box>
                        <Flex pb={10} justify={"space-between"} align={"center"}>
                          <Text pb={5} fz={"sm"}>Keyakinan</Text>
                          <Text c={"green"}>1.17M</Text>
                        </Flex>
                        <Progress value={80} color='green' />
                      </Box>
                      <Box>
                        <Flex pb={10} justify={"space-between"} align={"center"}>
                          <Text pb={5} fz={"sm"}>Menyokong</Text>
                          <Text c={"blue"}>881K</Text>
                        </Flex>
                        <Progress value={65} color='blue' />
                      </Box>
                      <Box>
                        <Flex pb={10} justify={"space-between"} align={"center"}>
                          <Text pb={5} fz={"sm"}>Positif</Text>
                          <Text  c={"grape"}>12%</Text>
                        </Flex>
                        <Progress value={45} color='grape' />
                      </Box>
                    </Stack>
                  </Paper>
                </Box>
                <Box>
                  <Paper h={"47vh"} w={rem(320)} bg={WARNA.bgNavbar} p={20}>
                    <Stack>
                      <Text fw={"bold"}>Indikator Neutral</Text>
                      <Box>
                        <Flex pb={10} justify={"space-between"} align={"center"}>
                          <Text pb={5} fz={"sm"}>Belum Pasti</Text>
                          <Text c={"orange"}>441K</Text>
                        </Flex>
                        <Progress value={55} color='orange' />
                      </Box>
                    </Stack>
                  </Paper>
                </Box>
                <Box>
                  <Paper w={rem(320)} h={"47vh"} bg={WARNA.bgNavbar} p={20}>
                    <Stack>
                      <Text fw={"bold"}>Indikator Pembangkang</Text>
                      <Box>
                        <Flex pb={10} justify={"space-between"} align={"center"}>
                          <Text pb={5} fz={"sm"}>Tidak Menyokong</Text>
                          <Text c={"black"}>420K</Text>
                        </Flex>
                        <Progress value={0} color='black' />
                      </Box>
                      <Box>
                        <Flex pb={10} justify={"space-between"} align={"center"}>
                          <Text pb={5} fz={"sm"}>Tidak Selesa</Text>
                          <Text c={"#DA5050FF"}>337K</Text>
                        </Flex>
                        <Progress value={55} color='#DA5050FF' />
                    </Box>
                    <Box>
                        <Flex pb={10} justify={"space-between"} align={"center"}>
                          <Text pb={5} fz={"sm"}>Negatif</Text>
                          <Text c={"#D92222FF"}>307K</Text>
                        </Flex>
                        <Progress value={35} color='#D92222FF' />
                      </Box>
                    </Stack>
                  </Paper>
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
