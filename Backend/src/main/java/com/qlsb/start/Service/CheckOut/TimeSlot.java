package com.qlsb.start.Service.CheckOut;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class TimeSlot {
    private LocalDate date;
    private String time;

    public TimeSlot(LocalDate date, String time) {
        this.date = date;
        this.time = time;
    }

    @Override
    public String toString() {
        return date + " - " + time;
    }

    public static int getTimeSlots(LocalDate startDate, LocalDate endDate, List<Integer> listCa, Integer thu) {
        List<TimeSlot> timeSlots = new ArrayList<>();
        
        while (startDate.getDayOfWeek().getValue() != (thu + 1) % 7) {
            startDate = startDate.plusDays(1);
        }
        
        while (!startDate.isAfter(endDate)) {
            if (startDate.getDayOfWeek().getValue() == (thu + 1) % 7) {
                for(Integer i : listCa) {
                    timeSlots.add(new TimeSlot(startDate, "Ca " + i));
                }
            }
            startDate = startDate.plusDays(7);
        }
        
        return timeSlots.size();
    }
    public static  List<TimeSlot>  getTimeSlots1(LocalDate startDate, LocalDate endDate, Integer ca, Integer thu) {
        List<TimeSlot> timeSlots = new ArrayList<>();
        
        while (startDate.getDayOfWeek().getValue() != (thu + 1) % 7) {
            startDate = startDate.plusDays(1);
        }
        
        while (!startDate.isAfter(endDate)) {
            if (startDate.getDayOfWeek().getValue() == (thu + 1) % 7) {
                timeSlots.add(new TimeSlot(startDate, "Ca " + ca));
            }
            startDate = startDate.plusDays(7);
        }
        
        return timeSlots;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

}
