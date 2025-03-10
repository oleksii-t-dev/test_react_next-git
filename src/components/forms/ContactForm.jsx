"use client";

import { useState } from "react";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import Button from "@/components/ui/button";
import RadioGroup from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  return (
    <div className="mx-auto p-6 lg:pl-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="first-name" className="text-gray-500 text-sm">
            First Name
          </Label>
          <Input
            id="first-name"
            placeholder="Enter First Name"
            className="border-b rounded-none px-0 focus:ring-0"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>
        <div>
          <Label htmlFor="last-name" className="text-gray-500 text-sm">
            Last Name
          </Label>
          <Input
            id="last-name"
            placeholder="Enter Last Name"
            className="border-b rounded-none px-0 focus:ring-0"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <Label htmlFor="email" className="text-gray-500 text-sm">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="border-b rounded-none px-0 focus:ring-0"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-gray-500 text-sm">
            Phone Number
          </Label>

          <Input
            id="phone"
            type="number"
            placeholder="+1 012 3456 789"
            className="border-b rounded-none px-0 focus:ring-0"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
      </div>

      <RadioGroup
        label="Select Subject?"
        name="subject"
        defaultValue="none"
        options={[
          { label: "General Inquiry 1", value: "option1" },
          { label: "General Inquiry 2", value: "option2" },
          { label: "General Inquiry 3", value: "option3" },
          { label: "General Inquiry 4", value: "option4" },
        ]}
        onChange={(value) => setFormData({ ...formData, subject: value })}
      />

      <div className="mt-8">
        <Label htmlFor="message" className="text-gray-500 text-sm">
          Message
        </Label>
        <Textarea
          label=""
          placeholder="Write your message.."
          rows={1}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>

      <div className="flex justify-end mt-8">
        <Button
          label="Send Message"
          onClick={() => console.log("Button clicked!")}
        />
      </div>
    </div>
  );
}