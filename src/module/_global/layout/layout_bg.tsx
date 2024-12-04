'use client'
import { AppShell, AppShellMain, AppShellNavbar, Box, Flex, Image, NavLink, rem, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineMonitor } from 'react-icons/ai';
import { BiSolidNotepad } from 'react-icons/bi';
import { BsGraphUp } from 'react-icons/bs';
import { FaChartArea, FaChartBar, FaHandshake, FaMagnifyingGlass, FaMap, FaRobot, FaShield, FaUserTie } from 'react-icons/fa6';
import { IoBarChartSharp } from "react-icons/io5";
import { TbReportAnalytics } from 'react-icons/tb';
import { WARNA } from '../fun/WARNA';


const mainanalythics = [
  {
    label: 'Live Dashboard',
    icon: <IoBarChartSharp color='#B3B3B3FF' />,
    link: "/"
  },
  {
    label: 'Summary',
    icon: <BiSolidNotepad color='#B3B3B3FF' />,
    link: "/summary"
  },
  {
    label: 'National Popularity',
    icon: <BiSolidNotepad color='#B3B3B3FF' />,
    link: "/nationalp"
  },
]
const areaanalysis = [
  {
    label: 'Regional Stronghold',
    icon: <FaShield color='#B3B3B3FF' />,
    link: '/regionals'
  },
  {
    label: 'Analisa Kawasan',
    icon: <FaChartArea color='#B3B3B3FF' />,
    link: '/analisak'
  },
  {
    label: 'Demographic Mapping',
    icon: <FaMap color='#B3B3B3FF' />,
    link: '/demographicm'
  },
]
const politicalanalysis = [
  {
    label: 'Coalition Tracking',
    icon: <FaHandshake color='#B3B3B3FF' />,
    link: '/coalitiont'
  },
  {
    label: 'Pemimpin Effect',
    icon: <FaUserTie color='#B3B3B3FF' />,
    link: '/pemimpine'
  },
  {
    label: 'SWOT Evaluation',
    icon: <FaChartBar color='#B3B3B3FF' />,
    link: '/analisas'
  },
]
const aimonitoring = [
  {
    label: 'ML-AI Analysis',
    icon: <FaRobot color='#B3B3B3FF' />,
    link: '/ml-ai'
  },
  {
    label: 'Demographic AI',
    icon: <FaChartBar color='#B3B3B3FF' />,
    link: '/demographicai'
  },
  {
    label: 'Prediction Metrics',
    icon: <BsGraphUp color='#B3B3B3FF' />,
    link: '/predictionm'
  },
]
const issuespecial = [
  {
    label: 'Issue Monitoring',
    icon: <AiOutlineMonitor color='#B3B3B3FF' />,
    link: '/issuem'
  },
  {
    label: 'Special Analysis',
    icon: <FaMagnifyingGlass color='#B3B3B3FF' />,
    link: '/speciala'
  },
  {
    label: 'Step Assesment',
    icon: <BiSolidNotepad color='#B3B3B3FF' />,
    link: '/stepa'
  },
]
const reporting = [
  {
    label: 'Report Features',
    icon: <TbReportAnalytics color='#B3B3B3FF' />,
    link: '/reportf'
  }
]



function LayoutBg({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <AppShell navbar={{ width: rem(250), breakpoint: 0 }}>
        <AppShellNavbar bg={WARNA.bgNavbar} style={{ overflowY: "auto" }}>
          <Box p={15}>
            <Flex gap={10} justify={"center"}>
              <Box>
                <Image radius={"md"} src={"assets/image/raven.jpg"} alt='' w={45} />
              </Box>
              <Stack gap={2}>
                <Text fw={"bold"} fz={"lg"}>RavenMY</Text>
                <Text fz={"xs"}>Election Analytics Platform</Text>
              </Stack>
            </Flex>
          </Box>
          <Box mb={5} style={{ borderBottom: "1px solid #888888FF ", height: "20px", width: rem(250) }}>
          </Box>
          <Box>
            <Text p={5} fw={"bold"} fz={"sm"}>MAIN ANALYTHICS</Text>
            {mainanalythics.map((v, i) => {
              return (
                <NavLink component={Link} href={v.link} key={i} label={<Text fz={"sm"} c={pathname === v.link ? "blue" : "#B3B3B3FF"}>{ v.label}</Text>} leftSection={v.icon} />
              )
            })}
          </Box>
          <Box>
            <Text p={5} fw={"bold"} fz={"sm"}>AREA ANALYSIS</Text>
            {areaanalysis.map((v, i) => {
              return (
                <Box key={i} p={2}>
                  <Stack gap={2}>
                  <NavLink component={Link} href={v.link} key={i} label={<Text fz={"sm"} c={pathname === v.link ? "blue" : "#B3B3B3FF"}>{ v.label}</Text>} leftSection={v.icon} />
                  </Stack>
                </Box>
              )
            })}
          </Box>
          <Text p={5} fw={"bold"} fz={"sm"}>POLITICAL ANALYSIS</Text>
          {politicalanalysis.map((v, i) => {
            return (
              <Box key={i} p={2}>
                <Stack gap={2}>
                <NavLink component={Link} href={v.link} key={i} label={<Text fz={"sm"} c={pathname === v.link ? "blue" : "#B3B3B3FF"}>{ v.label}</Text>} leftSection={v.icon} />
                </Stack>
              </Box>
            )
          })}
          <Text p={5} fw={"bold"} fz={"sm"}>AI & MONITORING</Text>
          {aimonitoring.map((v, i) => {
            return (
              <Box key={i} p={2}>
                <Stack gap={2}>
                <NavLink component={Link} href={v.link} key={i} label={<Text fz={"sm"} c={pathname === v.link ? "blue" : "#B3B3B3FF"}>{ v.label}</Text>} leftSection={v.icon} />
                </Stack>
              </Box>
            )
          })}
          <Text p={5} fw={"bold"} fz={"sm"}>ISSUE & SPECIAL</Text>
          {issuespecial.map((v, i) => {
            return (
              <Box key={i} p={2}>
                <Stack gap={2}>
                <NavLink component={Link} href={v.link} key={i} label={<Text fz={"sm"} c={pathname === v.link ? "blue" : "#B3B3B3FF"}>{ v.label}</Text>} leftSection={v.icon} />
                </Stack>
              </Box>
            )
          })}
          <Text p={5} fw={"bold"} fz={"sm"}>REPORTING</Text>
          {reporting.map((v, i) => {
            return (
              <Box key={i} p={2}>
                <Stack gap={2}>
                <NavLink component={Link} href={v.link} key={i} label={<Text fz={"sm"} c={pathname === v.link ? "blue" : "#B3B3B3FF"}>{ v.label}</Text>} leftSection={v.icon} />
                </Stack>
              </Box>
            )
          })}
        </AppShellNavbar>
        <AppShellMain bg={WARNA.bgMain}>
          <Box>
            {children}
          </Box>
        </AppShellMain>
      </AppShell>
    </ >
  );
}

export default LayoutBg;
