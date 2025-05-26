'use client';

import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Link,
  IconButton,
  useTheme,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

export default function HomePage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Left Text Section */}
      <Box
        sx={{
          width: '50%',
          backgroundColor: '#1f1f1f',
          color: '#fff',
          px: 10,
          py: 8,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: 700, mb: 1, letterSpacing: 1 }}
        >
          Asifa Banu
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, color: '#aaa' }}>
          Software Developer | MCA Student
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 4 }}>
          <IconButton
            sx={{ color: '#fff', p: 0 }}
            href="mailto:Asifabanu2604@gmail.com"
            size="small"
          >
            <EmailIcon fontSize="small" />
          </IconButton>
          <Typography fontSize={14}>Asifabanu2604@gmail.com</Typography>
        </Stack>

        <Typography
          variant="body1"
          sx={{ fontSize: '1rem', lineHeight: 1.8, width: '90%', color: '#ccc' }}
        >
          Driven by curiosity and fueled by technology, I am an MCA student who
          finds joy in designing beautiful web interfaces and building efficient
          applications. I believe every project is an opportunity to innovate,
          learn, and grow — making development my true passion.
        </Typography>
      </Box>

      {/* Right Image & Links Section */}
      <Box
        sx={{
          width: '50%',
          position: 'relative',
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("/profile.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Stack
          sx={{
            position: 'absolute',
            right: 50,
            top: '35%',
            gap: 4,
            color: '#fff',
          }}
        >
          {[
            { label: 'Resume', href: 'https://your-resume-link.com' },
            { label: 'Projects', href: 'https://github.com/asifa2604' },
            { label: 'Contact', href: 'mailto:Asifabanu2604@gmail.com' },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                color: '#fff',
                fontSize: '1.2rem',
                fontWeight: 500,
                position: 'relative',
                letterSpacing: 0.5,
                transition: 'all 0.3s ease',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#fff',
                  bottom: '-6px',
                  left: 0,
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s ease-in-out',
                },
                '&:hover::after': {
                  transform: 'scaleX(1)',
                },
              }}
            >
              {item.label}
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
