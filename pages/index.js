import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function Home() {
  return (
    <>
      <nav className={styles.navigation}>
        <Stack direction="row" spacing={2}>
          <Button variant="text">Text</Button>
          <Button variant="contained">contained</Button>
          <Button variant="outlined">outlined</Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Avatar>H</Avatar>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        </Stack>
      </nav>
      <main className={styles.main}>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
      </main>
      <footer className={styles.navigation}>
        <ButtonGroup variant="contained" orientation="vertical" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </footer>
    </>
  )
}
