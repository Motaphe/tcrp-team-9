import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  TextField,
  Snackbar,
  ThemeProvider,
  createTheme,
  CssBaseline,
  useMediaQuery,
} from '@mui/material';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const initialEventsData = [
  // Sample events data
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});

const Calendar = ({ isEmployee, userName }) => {
  const [eventsData, setEventsData] = useState(initialEventsData);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDate, setNewEventDate] = useState(dayjs());
  const [newEventDescription, setNewEventDescription] = useState('');
  const [newEventLocation, setNewEventLocation] = useState('');
  const [newEventStartTime, setNewEventStartTime] = useState('');
  const [newEventEndTime, setNewEventEndTime] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [editingEventIndex, setEditingEventIndex] = useState(null);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setEditingEventIndex(null);
  };

  const handleAddOrEditEvent = () => {
    const eventDate = newEventDate;
    const sixMonthsFromNow = dayjs().add(6, 'month');

    if (eventDate.isBefore(sixMonthsFromNow)) {
      setSnackbarOpen(true);
      return;
    }

    if (editingEventIndex !== null) {
      // Update existing event logic
    } else {
      // Add new event logic
    }

    // Clear form
    setNewEventTitle('');
    setNewEventDate(dayjs());
    setNewEventDescription('');
    setNewEventLocation('');
    setNewEventStartTime('');
    setNewEventEndTime('');
  };

  const handleEditEvent = (index) => {
    // Edit event logic
  };

  const currentMonthEvents = eventsData.filter(event => 
    dayjs(event.date).isSame(selectedDate, 'month')
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ padding: isMobile ? 1 : 2, maxWidth: '100vw', overflowX: 'hidden' }}>
          <Typography variant={isMobile ? "h5" : "h4"} gutterBottom align="center" sx={{ mb: 3 }}>
            Event Calendar
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <MobileDatePicker
              label="Select Month"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(props) => <TextField {...props} sx={{ width: isMobile ? '100%' : '50%' }} />}
              views={['year', 'month']}
            />
          </Box>

          <Typography variant={isMobile ? "h6" : "h5"} sx={{ mb: 2 }}>
            Events for {selectedDate.format('MMMM YYYY')}
          </Typography>
          
          <Grid container spacing={2}>
            {currentMonthEvents.length > 0 ? (
              currentMonthEvents.map((event, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <CardContent>
                      <Typography variant="h6" color="primary">{event.title}</Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        Date: {dayjs(event.date).format('MMMM D, YYYY')}
                      </Typography>
                      <Typography variant="body2">{event.description}</Typography>
                      <Typography variant="body2">Location: {event.location}</Typography>
                      <Typography variant="body2">Time: {event.startTime} - {event.endTime}</Typography>
                    </CardContent>
                    {isEmployee && (
                      <Box sx={{ p: 1 }}>
                        <Button variant="outlined" onClick={() => handleEditEvent(index)} fullWidth size={isMobile ? "small" : "medium"}>
                          Edit
                        </Button>
                      </Box>
                    )}
                  </Card>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography variant="body1">No events for this month.</Typography>
              </Grid>
            )}
          </Grid>

          {/* New Event Form */}
          <Box sx={{ marginTop: 4 }}>
            <Typography variant={isMobile ? "h6" : "h5"} sx={{ mb: 2 }}>{editingEventIndex !== null ? 'Edit Event' : 'Add New Event'}</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Event Title"
                  value={newEventTitle}
                  onChange={(e) => setNewEventTitle(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MobileDatePicker
                  label="Event Date"
                  value={newEventDate}
                  onChange={(newDate) => setNewEventDate(newDate)}
                  renderInput={(props) => <TextField {...props} fullWidth />}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  value={newEventDescription}
                  onChange={(e) => setNewEventDescription(e.target.value)}
                  multiline
                  rows={3}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Location"
                  value={newEventLocation}
                  onChange={(e) => setNewEventLocation(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  type="time"
                  label="Start Time"
                  value={newEventStartTime}
                  onChange={(e) => setNewEventStartTime(e.target.value)}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  type="time"
                  label="End Time"
                  value={newEventEndTime}
                  onChange={(e) => setNewEventEndTime(e.target.value)}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" onClick={handleAddOrEditEvent} fullWidth size={isMobile ? "large" : "medium"}>
                  {editingEventIndex !== null ? 'Update Event' : 'Add Event'}
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={() => setSnackbarOpen(false)}
            message="Event date must be at least 6 months in the future."
          />
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default Calendar;









