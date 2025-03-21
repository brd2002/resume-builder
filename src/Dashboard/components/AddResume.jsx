import { Loader2, PlusCircle, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { data } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import {CreateNewResume} from "../../../service/GlobalApi.js";

function AddResumePage() {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const [loading , setLoading] = useState(false);
  const {user} = useUser();
  const onCreateResume = async () => {
    setLoading(true);
    const uuid = uuidv4();
    const data = {
        data:{
            title:resumeTitle,
            resumeId : uuid,
            userEmail :user?.primaryEmailAddress.emailAddress,
            uesrName:user?.firstName
        }
    }
    // console.log(resumeTitle , uuid);
    try {
      console.log(data);
      const response = CreateNewResume(data.data);
      console.log(response);
      if (response) {
        // setOpenDialog(false);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
    
  }
  return (
    <div>
      <div
        className="p-14 py-24 flex justify-center items-center bg-secondary rounded-md h-[260px] hover:scale-100 hover:shadow-md transition-all cursor-pointer"
        onClick={() => setOpenDialog(true)}
      >
        <PlusCircle />
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <p >Add title for yoru resume</p>
              <Input className="mt-2" placeholder="Title Ex- Frontend Developer" onChange={(e) => setResumeTitle(e.target.value)}/>
            </DialogDescription>
            <div className="flex justify-end gap-3">
              <Button onClick ={() => setOpenDialog(false)}>Cancel</Button>
              <Button disabled={!resumeTitle || loading} onClick={() => onCreateResume()}>
              {
                loading ? <Loader2 className="animate-spin" /> : 'Create'
              }
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResumePage;
