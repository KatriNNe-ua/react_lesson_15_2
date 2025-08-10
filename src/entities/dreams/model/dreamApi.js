import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import DbOperations from "./api/DbOperations";

const db = new DbOperations("dream");

export const dreamApi = createApi({
  reducerPath: "dreamApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Dreams"],
  endpoints: (builder) => ({
    // З пагінацією
    getDreams: builder.query({
      async queryFn({ page = 1, perPage = 5, cursors = [] }) {
        try {
          const { data, cursor, hasMore } = await db.getAllPaginated({
            page,
            perPage,
            cursors,
          });
       return { data: { dreams: data, cursor, hasMore } };
        } catch (error) {
          return { error: { status: 500, message: error.message } };
        }
      },
      providesTags: ["Dream"],
    }),

    getDreamById: builder.query({
      async queryFn(id) {
        try {
          const data = await db.getById(id);
          return { data };
        } catch (error) {
          return { error };
        }
      },
    }),

    addDream: builder.mutation({
      async queryFn(product) {
        try {
          await db.add(product);
          return { data: true };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["Dream"],
    }),

    updateDream: builder.mutation({
      async queryFn({ id, data }) {
        try {
          await db.update(id, data);
          return { data: true };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["Dream"],
    }),

    deleteDream: builder.mutation({
      async queryFn(id) {
        try {
          await db.delete(id);
          return { data: true };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["Dream"],
    }),
  }),
});

export const {
  useGetDreamsQuery,
  useGetDreamByIdQuery,
  useAddDreamMutation,
  useUpdateDreamMutation,
  useDeleteDreamMutation,
} = dreamApi;
