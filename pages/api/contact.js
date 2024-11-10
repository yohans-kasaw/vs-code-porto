export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Only POST requests are allowed' });
  }

  try {
    // Hard-coded response with your information
    const responseData = {
      name: 'Yohans Hailu Kasaw',
      email: 'yohanshailukasaw@gmail.com',
      subject: 'Software Engineer',
      message: 'Experienced in backend and frontend development, familiar with modern frameworks and libraries.',
    };

    res.status(201).json({ msg: 'Success', data: responseData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Failed' });
  }
};
