<?php
    include_once __DIR__."/../models/Appointment.php";


    class AppointmentController extends Appointment{

        //add appointment
        public function add($data){
            return $this->addData($data);
        }
            
        //get appoint_times
        public function getAppointments($date){
            return $this->getAppoints($date);
        }

        // delete appoint
        public function delete($id){
            return $this->delAppoint($id);
        }
    }
?>