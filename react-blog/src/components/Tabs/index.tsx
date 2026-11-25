import { Box, Button } from "@mui/material"
import { useState } from "react"


interface Tab {
  id: string,
  text: string,
  title: string
}

// map, hash-table 
const tabs = {
  'first': {
    id: 'first',
    text: 'Content Firts Tab',
    title: 'Firtst Tab',
  }, 
  'second': {
    id: 'second',
    text: 'Content Second Tab',
    title: 'Second Tab',
  },
  'third': {
    id: 'third',
    text: 'Content Third Tab',
    title: 'Third Tab',
  }
}

export const Tabs = () => {
  const [isActive, setIsActive] = useState<string>('third');
  const activeTab = tabs[isActive]

  const onSelectTab = (id: string) => {
    setIsActive(id)
  }

  return (
    <>
      <Box>
        {Object.values(tabs).map((tab) => {
          const isActiveTab = tab.id === isActive;

          return <Button
            key={tab.id} 
            onClick={() => onSelectTab(tab.id)} 
            variant={isActiveTab ? 'contained' : 'text'}
            >
            {tab.title}
          </Button>
        })}
      </Box>
      <Box key={activeTab.id}>
        {activeTab.text}
      </Box>
    </>
  )
}