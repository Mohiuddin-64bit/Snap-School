
import Rating from 'react-rating';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      rating: 4.5,
    },
    // Add more testimonial objects
  ];

  return (
    <div className='w-full text-center my-12'>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="p-8 bg-white rounded-lg shadow-md mb-4">
          <h3 className="text-lg font-bold mb-2">{testimonial.name}</h3>
          <div className="flex items-center mb-2">
            <Rating
              initialRating={testimonial.rating}
              emptySymbol={<i className="far fa-star text-gray-400 mr-1" />}
              fullSymbol={<i className="fas fa-star text-yellow-400 mr-1" />}
              readonly
            />
            <span className="text-gray-600 ml-2">{testimonial.rating}</span>
          </div>
          <p className="text-gray-600">{testimonial.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
