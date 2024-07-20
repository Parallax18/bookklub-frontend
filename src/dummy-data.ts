import { IBookItemCard } from "./components/home/BookItemCard";
import {
  IInboundRental,
  IOutboundRental,
  IRentalItemProps,
} from "./components/Rentals/RentalItem";

export const dummyBooks: IBookItemCard[] = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    state: "Classic",
    country: "USA",
    rating: "4.8",
    coverImg: "https://covers.openlibrary.org/b/id/8225266-L.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    state: "Dystopian",
    country: "UK",
    rating: "4.7",
    coverImg: "https://covers.openlibrary.org/b/id/1532989-L.jpg",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    state: "Classic",
    country: "UK",
    rating: "4.6",
    coverImg: "https://covers.openlibrary.org/b/id/8280206-L.jpg",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    state: "Classic",
    country: "USA",
    rating: "4.4",
    coverImg: "https://covers.openlibrary.org/b/id/8299787-L.jpg",
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    state: "Classic",
    country: "USA",
    rating: "4.3",
    coverImg: "https://covers.openlibrary.org/b/id/8221783-L.jpg",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    state: "Classic",
    country: "USA",
    rating: "4.2",
    coverImg: "https://covers.openlibrary.org/b/id/8224814-L.jpg",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    state: "Dystopian",
    country: "UK",
    rating: "4.1",
    coverImg: "https://covers.openlibrary.org/b/id/8220542-L.jpg",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    state: "Fantasy",
    country: "UK",
    rating: "4.8",
    coverImg: "https://covers.openlibrary.org/b/id/8221054-L.jpg",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    state: "Fantasy",
    country: "UK",
    rating: "4.9",
    coverImg: "https://covers.openlibrary.org/b/id/7772516-L.jpg",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    state: "Fantasy",
    country: "UK",
    rating: "4.9",
    coverImg: "https://covers.openlibrary.org/b/id/7882651-L.jpg",
  },
];

export const dummyRentals: (IOutboundRental | IInboundRental)[] = [
  // Outbound Rental
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rentDate: "2024-07-01",
    returnDate: "2024-07-15",
    status: "ACTIVE",
    coverImg: "https://covers.openlibrary.org/b/id/8299787-L.jpg",
    type: "OUTBOUND_RENTAL",
    rentees_phone: "123-456-7890",
    rentees_location: "Rentee Location",
    rentees_name: "Rentee Name",
  },

  // Outbound Rental
  {
    title: "1984",
    author: "George Orwell",
    rentDate: "2024-07-01",
    returnDate: "2024-07-15",
    status: "OVERDUE",
    coverImg: "https://covers.openlibrary.org/b/id/1532989-L.jpg",
    type: "OUTBOUND_RENTAL",
    rentees_phone: "234-567-8901",
    rentees_location: "Another Rentee Location",
    rentees_name: "Another Rentee Name",
  },

  // Outbound Rental
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rentDate: "2024-07-01",
    returnDate: "2024-07-15",
    status: "ACTIVE",
    coverImg: "https://covers.openlibrary.org/b/id/8280206-L.jpg",
    type: "OUTBOUND_RENTAL",
    rentees_phone: "345-678-9012",
    rentees_location: "Third Rentee Location",
    rentees_name: "Third Rentee Name",
  },

  // Inbound Rental
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rentDate: "2024-07-01",
    returnDate: "2024-07-15",
    status: "OVERDUE",
    coverImg: "https://covers.openlibrary.org/b/id/8225266-L.jpg",
    type: "INBOUND_RENTAL",
    owner_name: "Owner Name",
    owners_phone: "456-789-0123",
    owners_location: "Owner Location",
  },

  // Inbound Rental
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    rentDate: "2024-07-01",
    returnDate: "2024-07-15",
    status: "ACTIVE",
    coverImg: "https://covers.openlibrary.org/b/id/8224814-L.jpg",
    type: "INBOUND_RENTAL",
    owner_name: "Another Owner",
    owners_phone: "567-890-1234",
    owners_location: "Another Owner Location",
  },

  // Inbound Rental
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    rentDate: "2024-07-01",
    returnDate: "2024-07-15",
    status: "OVERDUE",
    coverImg: "https://covers.openlibrary.org/b/id/8220542-L.jpg",
    type: "INBOUND_RENTAL",
    owner_name: "Third Owner",
    owners_phone: "678-901-2345",
    owners_location: "Third Owner Location",
  },

  // Outbound Rental
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    rentDate: "2024-07-01",
    returnDate: "2024-07-15",
    status: "ACTIVE",
    coverImg: "https://covers.openlibrary.org/b/id/8221054-L.jpg",
    type: "OUTBOUND_RENTAL",
    rentees_phone: "456-789-0123",
    rentees_location: "Rentee Location",
    rentees_name: "Rentee Name",
  },
];
