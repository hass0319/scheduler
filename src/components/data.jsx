
const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];

const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

const appointments = {
  "1": {
    id: 1,
    time: "12pm",
  },
  "2": {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 3,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  "3": {
    id: 3,
    time: "2pm",
  },
  "4": {
    id: 4,
    time: "3pm",
    interview: {
      student: "Archie Andrews",
      interviewer: {
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      }
    }
  },
  "5": {
    id: 5,
    time: "4pm",
  }
};

[{
  "id": 1,
  "name": "Monday", "appointments": [1, 2, 3, 4, 5],
  "interviewers": [1, 3, 6, 7, 8], "spots": 3
},
{
  "id": 2,
  "name": "Tuesday", "appointments": [6, 7, 8, 9, 10],
  "interviewers": [1, 2, 5, 8, 9], "spots": 3
},
{
  "id": 3,
  "name": "Wednesday", "appointments": [11, 12, 13, 14, 15],
  "interviewers": [1, 2, 4, 7, 9], "spots": 2
},
{
  "id": 4,
  "name": "Thursday", "appointments": [16, 17, 18, 19, 20],
  "interviewers": [1, 2, 6, 7, 9], "spots": 3
},
{
  "id": 5,
  "name": "Friday", "appointments": [21, 22, 23, 24, 25],
  "interviewers": [1, 3, 4, 6, 7], "spots": 4
}]