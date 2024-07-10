import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'
import React from 'react';

export const MuiMode:React.FC<{}> = () => {
  const theme = useTheme()
  return (
    <>
      <Typography component="h1">{`${theme.palette.mode} mode`}</Typography>
    </>
  )
}