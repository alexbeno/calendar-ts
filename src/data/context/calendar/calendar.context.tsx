import React, { useState, createContext } from 'react';
import { Bien, newDispo } from 'data/constant/bien.constant';
import { Visite } from 'data/constant/visite.constant';
import { VIEW } from 'data/constant/view.constant';
import moment from 'moment';

interface ContextProps {
  bien: Bien[];
  visite: Visite[];
  view: string;
  setBien: (dispo: newDispo) => void;
  setVisite: (visite: Visite) => void;
  setView: (view: string) => void;
  checkEventDispo: (start: Date, end: Date, id?: string) => Boolean;
}

const initialVisite = [
  {
    start: new Date('2020-09-29T15:00:00'),
    end: new Date('2020-09-29T15:30:00'),
    bienId: 'EMILE ZOLA',
  },
];

const initialBien = [
  {
    id: 'EMILE ZOLA',
    addresse: '101 Rue Oberkampf, 75011 paris',
    disponibilités: [
      {
        start: new Date('2020-09-29T15:00:00'),
        end: new Date('2020-09-29T16:00:00'),
        recurrent: false,
      },
    ],
  },
  {
    id: 'AMELOT',
    addresse: '50 Rue Amelot, 75011 paris',
    disponibilités: [],
  },
  {
    id: 'BREGUET',
    addresse: '10 Rue Breguet, 75011 paris',
    disponibilités: [],
  },
  {
    id: 'TERNAUX',
    addresse: '13 Rue Ternaux, 75011 paris',
    disponibilités: [],
  },
  {
    id: 'PARMENTIER',
    addresse: '67 Avenue Parmentier, 75011 paris',
    disponibilités: [],
  },
];

export const CalendarContext = createContext<ContextProps>({
  bien: initialBien,
  visite: initialVisite,
  view: VIEW.DISPO,
  setBien: () => {},
  setVisite: () => {},
  setView: () => {},
  checkEventDispo: () => false,
});

interface OwnProps {
  children: any;
}

export const CalendarProvider: React.FC<OwnProps> = ({ children }) => {
  const [bienValue, setBienValue] = useState(initialBien);
  const [visiteValue, setVisiteValue] = useState(initialVisite);
  const [view, setView] = useState(VIEW.VISITE);

  const setBienById = (id: string, newValue: newDispo): Bien[] => {
    const newBienArray: Bien[] = [];
    bienValue.forEach(singleBien => {
      if (singleBien && singleBien.id === id) {
        singleBien.disponibilités.push({
          start: newValue.start,
          end: newValue.end,
          recurrent: false,
        });
      }

      newBienArray.push(singleBien);
    });
    return newBienArray;
  };

  const handleBien = (dispo: newDispo) => {
    setBienValue(setBienById(dispo.id, dispo));
  };

  const handleVisite = (visite: Visite) => {
    const tempVisite = visiteValue;
    tempVisite.push(visite);
    setVisiteValue(tempVisite);
  };

  const handleView = (newview: string) => {
    setView(newview);
  };

  const checkEventDispo = (start: Date, end: Date, id?: string): Boolean => {
    const asEvent = bienValue.filter(single => {
      if (id) {
        return (
          single.id === id &&
          single.disponibilités.filter(el => {
            return moment(start).isBetween(moment(el.start), moment(el.end), undefined, '[)') &&
              moment(end).isBetween(moment(el.start), moment(el.end), undefined, '(]')
              ? el
              : null;
          }).length > 0
        );
      }
      return (
        single.disponibilités.filter(el => {
          return moment(start).isBetween(moment(el.start), moment(el.end), undefined, '[)') &&
            moment(end).isBetween(moment(el.start), moment(el.end), undefined, '(]')
            ? el
            : null;
        }).length > 0
      );
    });

    if (asEvent && asEvent.length > 0) {
      return true;
    }
    return false;
  };

  return (
    <CalendarContext.Provider
      value={{
        bien: bienValue,
        visite: visiteValue,
        setBien: handleBien,
        setVisite: handleVisite,
        setView: handleView,
        checkEventDispo,
        view,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
