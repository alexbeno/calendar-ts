import * as React from 'react';
import { CalendarContext } from 'data/context/calendar/calendar.context';
import { DateSelectArg } from '@fullcalendar/react';
import { DateClickArg } from '@fullcalendar/interaction';
import { VIEW } from 'data/constant/view.constant';
import { SelectObject } from 'data/constant/select.constant';
import { slugify } from 'helpers/script/format/slugify.util';
import moment from 'moment';
import { Event } from 'data/constant/event.constant';
import CalendarView_template from './view.calendar.template';
import './view.calendar.style.css';

const CalendarView: React.FC = () => {
  const { bien, setBien, view, setView, setVisite, visite, checkEventDispo } = React.useContext(CalendarContext);
  const [showForm, setShowForm] = React.useState(false);
  const [bienId, setBienId] = React.useState('');
  const [dispo, setdispo] = React.useState({
    start: new Date(),
    end: new Date(),
  });
  const [newVisite, setnewVisite] = React.useState({
    start: new Date(),
    end: new Date(),
  });

  const renderDispo = (): Event[] => {
    const eventArray: Event[] = [];

    bien.forEach(singleBien => {
      const disponibilitésItem = singleBien.disponibilités;
      disponibilitésItem.forEach(singleDisponibilités => {
        if (view === VIEW.VISITE) {
          eventArray.push({
            start: singleDisponibilités.start,
            end: singleDisponibilités.end,
            title: singleBien.id,
            display: 'background',
            recurrent: false,
          });
        } else {
          eventArray.push({
            start: singleDisponibilités.start,
            end: singleDisponibilités.end,
            title: singleBien.id,
            recurrent: false,
          });
        }
      });
    });

    if (view === VIEW.VISITE) {
      visite.forEach(singleVisite => {
        eventArray.push({
          start: singleVisite.start,
          end: singleVisite.end,
          recurrent: false,
        });
      });
    }
    return eventArray;
  };

  const renderBienSelector = (): SelectObject[] => {
    const selector: SelectObject[] = [];
    bien.forEach(singleBien => {
      selector.push({
        value: singleBien.id,
        slug: slugify(singleBien.id),
      });
    });

    return selector;
  };

  const handleDateClick = (e: DateClickArg) => {
    const endDate = moment(e.date)
      .add(30, 'minute')
      .toDate();
    if (view === VIEW.VISITE && checkEventDispo(e.date, endDate)) {
      setnewVisite({
        start: e.date,
        end: endDate,
      });
      setShowForm(true);
    }
  };

  const handleDateSelector = (e: DateSelectArg) => {
    if (view === VIEW.DISPO) {
      setdispo({
        start: e.start,
        end: e.end,
      });
      setShowForm(true);
    }
  };

  const handleHideForm = () => {
    setShowForm(false);
  };

  const handleSubmit = () => {
    if (view === VIEW.DISPO) {
      setBien({
        start: dispo.start,
        end: dispo.end,
        id: bienId,
      });
    } else if (checkEventDispo(newVisite.start, newVisite.end, bienId)) {
      setVisite({
        start: newVisite.start,
        end: newVisite.end,
        bienId,
      });
    }
    setShowForm(false);
  };

  const handleSelect = (value: string) => {
    setBienId(value);
  };

  const handleDispoView = () => {
    setView(VIEW.DISPO);
  };

  const handleVisiteView = () => {
    setView(VIEW.VISITE);
  };

  return (
    <CalendarView_template
      disponibilités={renderDispo()}
      handleDateClick={handleDateClick}
      handleDateSelector={handleDateSelector}
      showForm={showForm}
      hideForm={handleHideForm}
      bienId={bienId}
      handleSubmit={handleSubmit}
      bienSelector={renderBienSelector()}
      handleSelect={handleSelect}
      handleDispoView={handleDispoView}
      handleVisiteView={handleVisiteView}
      view={view}
    />
  );
};
export default CalendarView;
