import React, { useState } from "react";

interface CalendarProps {
  onSelectDate: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onSelectDate }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const getMonthName = (monthIndex: number): string => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[monthIndex];
  };

  const generateCalendar = (year: number, month: number): JSX.Element => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const startingDay = firstDayOfMonth.getDay();

    const weeks: JSX.Element[] = [];
    let days: JSX.Element[] = [];

    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected =
        selectedDate && date.toDateString() === selectedDate.toDateString();

      days.push(
        <div
          key={day}
          className={`calendar-day ${isSelected ? "selected" : ""}`}
          onClick={() => handleDateClick(date)}
        >
          {day}
        </div>
      );

      if ((day + startingDay) % 7 === 0 || day === daysInMonth) {
        weeks.push(
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              width: "30%",
              gap: "20px",
              alignItems: "flex-start",
            }}
            key={weeks.length}
            className="calendar-week"
          >
            {days}
          </div>
        );
        days = [];
      }
    }

    return <div className="calendar-month">{weeks}</div>;
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onSelectDate(date);
  };

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  return (
    <div className="calendar">
      <header>
        <button onClick={() => setSelectedDate(null)}>Clear</button>
        <h2>
          {getMonthName(month)} {year}
        </h2>
      </header>
      <div className="calendar-grid">{generateCalendar(year, month)}</div>
    </div>
  );
};

export default Calendar;
