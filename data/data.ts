export const cases = [
  {
    caseID: 1001,
    name: 'John Doe',
    surgery: 'Knee Surgery',
    duration: 3,
    profileImage: 'https://cnmi.spmi.pt/wp-content/uploads/2014/10/speaker-3.jpg',
    status: 'inactive',
    age: 19,
    gender: 'Male',
    hospital: 'Charnock Hospital',
  }, {
    caseID: 1030,
    name: 'Kevin Stokes',
    surgery: 'Elbow Surgery',
    duration: 3,
    profileImage: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
    status: 'active',
    age: 39,
    gender: 'Male',
    hospital: 'Charnock Hospital',
  }, {
    caseID: 1020,
    name: 'Bryan Paul',
    surgery: 'Leg Surgery',
    duration: 3,
    profileImage: 'https://www.shutterstock.com/image-photo/profile-picture-smiling-young-african-260nw-1873784920.jpg',
    status: 'inactive',
    age: 60,
    gender: 'Male',
    hospital: 'Charnock Hospital',
  }, {
    caseID: 2030,
    name: 'U Bolt',
    surgery: 'Hand Surgery',
    duration: 3,
    profileImage: 'https://www.shutterstock.com/image-photo/smiling-mature-businessman-shirt-260nw-2188275225.jpg',
    status: 'complete',
    age: 29,
    gender: 'Male',
    hospital: 'Charnock Hospital',
  },
  {
    caseID: 9030,
    name: 'Deepak Sridhar',
    surgery: 'Elbow Surgery',
    duration: 10,
    profileImage: 'https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg',
    status: 'inactive',
    age: 32,
    gender: 'Male',
    hospital: 'Charnock Hospital',
  }
];

export const countries = [
  { country: 'Afghanistan', code: '93', iso: 'AF' },
  { country: 'Albania', code: '355', iso: 'AL' },
  { country: 'Algeria', code: '213', iso: 'DZ' },
  { country: 'American Samoa', code: '1-684', iso: 'AS' },
  { country: 'Andorra', code: '376', iso: 'AD' },
  { country: 'Angola', code: '244', iso: 'AO' },
  { country: 'Anguilla', code: '1-264', iso: 'AI' },
  { country: 'Antarctica', code: '672', iso: 'AQ' },
  { country: 'Antigua and Barbuda', code: '1-268', iso: 'AG' },
  { country: 'Argentina', code: '54', iso: 'AR' },
  { country: 'Armenia', code: '374', iso: 'AM' },
  { country: 'Aruba', code: '297', iso: 'AW' },
  { country: 'Australia', code: '61', iso: 'AU' },
  { country: 'Austria', code: '43', iso: 'AT' },
  { country: 'Azerbaijan', code: '994', iso: 'AZ' },
  { country: 'Bahamas', code: '1-242', iso: 'BS' },
  { country: 'Bahrain', code: '973', iso: 'BH' },
];

export const patientReadingsData = [
  { time: '08:00', temperature: 98, skin: 5, redness: 2 },
  { time: '12:00', temperature: 100, skin: 6, redness: 3 },
  { time: '16:00', temperature: 99, skin: 4, redness: 1 },
  { time: '17:00', temperature: 101, skin: 7, redness: 4 },
  { time: '17:30', temperature: 78, skin: 7, redness: 4 },
  { time: '19:00', temperature: 89, skin: 7, redness: 4 },
  { time: '20:00', temperature: 95, skin: 7, redness: 4 },
  { time: '20:30', temperature: 99, skin: 7, redness: 4 },
];

export const profession = [
  {id: 1, professionName: 'Doctor'},
  {id: 2, professionName: 'HCP'},
  {id: 3, professionName: 'Surgeon'},
  {id: 4, professionName: 'Nurse'},
  {id: 5, professionName: 'Staff'},
  {id: 6, professionName: 'Attendant'},
]

export const hospital = [
  {id: 1, hospitalName: 'Hospital A'},
  {id: 2, hospitalName: 'Hospital B'},
  {id: 3, hospitalName: 'Hospital C'},
  {id: 4, hospitalName: 'Hospital D'},
  {id: 5, hospitalName: 'Hospital E'},
  {id: 6, hospitalName: 'Hospital F'},
]

export const userProfile = {
  userName: 'Rahul Thakur',
  email: 'iamrahulthakur.1992@gmail.com',
  profession: '',
  hospital: '',
  dob: '',
  createdAt: '',
  profileUpdated: false,
  firstLogin: true,
}