import Link from 'next/link';
import { useRouter } from 'next/router';

const ListingPagination = ({ totalPages }) => {
  const router = useRouter();
  let page = parseInt(router.query.page) ? parseInt(router.query.page) : 1;
  return (
    <>
      <div className='pagination-area text-center'>
        {[...Array(totalPages).keys()].map((x) => (
          <span key={x + 1}>
            <Link href={`/listings?page=${x + 1}`}>
              <span
                className={
                  x + 1 === parseInt(router.query.page)
                    ? 'current page-numbers'
                    : 'page-numbers'
                }
              >
                {x + 1}
              </span>
            </Link>
          </span>
        ))}

        <Link href={`/listings/?page=${page + 1}`}>
          <span
            className={
              page === totalPages
                ? 'isDisabled next page-numbers'
                : 'next page-numbers'
            }
          >
            <i className='bx bx-chevrons-right'></i>
          </span>
        </Link>
      </div>
    </>
  );
};

export default ListingPagination;
