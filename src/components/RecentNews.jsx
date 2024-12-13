import React from 'react';
import CleaningWomen1 from '../assets/Cleaning-women1.jpeg'
import CleaningWomen2 from '../assets/Cleaning-women2.jpeg'
import CleaningWomen3 from '../assets/Cleaning-women3.jpeg'
import Blog1 from '../assets/Blog1.jpeg'
import Blog2 from '../assets/Blog2.jpg'
import Blog3 from '../assets/Blog3.jpeg'

const NewsCard = ({ date, month, category, title, description, author, role, image, blogImage }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={blogImage}
          alt="Blog Cover" 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white p-3 rounded-xl text-center min-w-[60px] shadow-md">
          <div className="text-2xl font-bold">{date}</div>
          <div className="text-sm font-medium">{month}</div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-20"/>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
          <div className="h-1 w-1 bg-gray-300 rounded-full"/>
          <span className="text-gray-400 text-sm">5 min read</span>
        </div>
        
        <h3 className="text-teal-900 text-xl font-bold mb-3 hover:text-cyan-600 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-2">
          {description}
        </p>
        
        {/* Author Section */}
        <div className="flex items-center border-t pt-6">
          <div className="relative">
            <img 
              src={image} 
              alt={author} 
              className="w-12 h-12 rounded-full mr-3 border-2 border-white ring-2 ring-cyan-500"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white"/>
          </div>
          <div>
            <div className="text-teal-900 font-semibold hover:text-cyan-600 transition-colors duration-200">
              {author}
            </div>
            <div className="text-gray-400 text-sm">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecentNews = () => {
  const newsItems = [
    {
      date: '12',
      month: 'Nov',
      category: 'CLEANING',
      title: 'Temporary Ruling Issued',
      description: 'Washla has met the demands of a growing world cleaning tremendous. Our innovative solutions have transformed the industry standard.',
      author: 'Martha Smith',
      role: 'Washla CEO',
      image: CleaningWomen1,
      blogImage: Blog1
    },
    {
      date: '11',
      month: 'Nov',
      category: 'CLEANING',
      title: 'The Expands California',
      description: 'welcomed and every sed ut perspiciatis unde omnis iste natus. Breaking new ground in sustainable cleaning practices.',
      author: 'Laura Jones',
      role: 'Accounting',
      image: CleaningWomen2,
      blogImage: Blog2
    },
    {
      date: '10',
      month: 'Nov',
      category: 'CLEANING',
      title: 'Temporary Ruling Issued',
      description: 'Washla has met the demands of a growing world. The Cleaning revolution starts with innovative solutions.',
      author: 'Matt Ryan',
      role: 'Lawyer',
      image: CleaningWomen3,
      blogImage: Blog3
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-semibold mb-4">
            WHY CHOOSE US
          </div>
          <h3 className="text-teal-900 text-4xl font-bold mb-6">Recent News</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialise in intelligent & effective Search and believes in the power of partnerships to grow business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <NewsCard
              key={index}
              date={item.date}
              month={item.month}
              category={item.category}
              title={item.title}
              description={item.description}
              author={item.author}
              role={item.role}
              image={item.image}
              blogImage={item.blogImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentNews;