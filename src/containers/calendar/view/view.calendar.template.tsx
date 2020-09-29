import * as React from 'react';
import FullCalendar, { DateSelectArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import LayoutPopup from 'components/layout/popup/popup.layout.controller';
import Form from 'components/form/form/form.form.controller';
import ButtonPrimmary from 'components/button/primary/primary.button.controller';
import FormSelect from 'components/form/select/select.form.controller';
import { SelectObject } from 'data/constant/select.constant';
import GridSeparator from 'components/grid/separator/separator.grid.controller';
import { VIEW } from 'data/constant/view.constant';
import { Event } from 'data/constant/event.constant';

interface Props {
  disponibilités: Event[];
  showForm: boolean;
  handleDateSelector: (e: DateSelectArg) => void;
  handleDateClick: (e: DateClickArg) => void;
  hideForm: () => void;
  handleSubmit: () => void;
  handleDispoView: () => void;
  handleVisiteView: () => void;
  handleSelect: (value: string) => void;
  bienId: string;
  view: string;
  bienSelector: SelectObject[];
}

const CalendarView_template: React.FC<Props> = ({
  disponibilités,
  handleDateSelector,
  handleDateClick,
  showForm,
  hideForm,
  bienId,
  handleSubmit,
  bienSelector,
  handleSelect,
  handleDispoView,
  view,
  handleVisiteView,
}) => {
  return (
    <div>
      <LayoutPopup active={showForm} title="Ajouter une disponibilité" closeEvent={hideForm}>
        <Form>
          <FormSelect result={bienId} value={bienSelector} select={handleSelect} />
          <GridSeparator sm="32" />
          <ButtonPrimmary eventHandler={handleSubmit}>Valider</ButtonPrimmary>
        </Form>
      </LayoutPopup>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        editable
        dateClick={handleDateClick}
        events={disponibilités}
        selectable={view === VIEW.DISPO}
        select={handleDateSelector}
        allDaySlot={false}
        slotMinTime="07:00:00"
        slotMaxTime="22:00:00"
        customButtons={{
          myCustomButton: {
            text: view === VIEW.VISITE ? 'Modifier vos disponibilités' : 'Sauvegarder vos disponibilités',
            click() {
              if (view === VIEW.VISITE) {
                handleDispoView();
              } else {
                handleVisiteView();
              }
            },
          },
        }}
        headerToolbar={{
          left: 'myCustomButton',
          center: 'title',
          right: 'prev,next',
        }}
      />
    </div>
  );
};

export default CalendarView_template;
