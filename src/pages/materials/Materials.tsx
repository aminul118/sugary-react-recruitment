import { useEffect, useState, useRef, useCallback } from "react";
import axios from "../../hooks/axiosInstance";
import type { Material } from "@/lib/types/types";
import encodeFilter from "@/utils/encodeFilter";
import MaterialCard from "@/components/MaterialCard/MaterialCard";
import Loader from "@/components/loading/Loader";
import Container from "@/components/ui/Container";
import MaterialCardSkeleton from "@/components/loading/MaterialCardSkeleton";

const Materials = () => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const isEndRef = useRef(false); // to stop when there's no more data

  const loadMaterials = useCallback(async () => {
    if (loading || isEndRef.current) return;

    setLoading(true);
    const filter = encodeFilter({ Skip: skip, Limit: 20, Types: [1] });

    try {
      const res = await axios.get<{ Materials: Material[] }>(
        `/Materials/GetAll/?filter=${filter}`
      );
      const newMaterials = res.data.Materials;

      if (newMaterials.length === 0) {
        isEndRef.current = true; // no more data
      } else {
        setMaterials((prev) => {
          const existingIds = new Set(prev.map((m) => m.Id));
          const uniqueNew = newMaterials.filter((m) => !existingIds.has(m.Id));
          return [...prev, ...uniqueNew];
        });
        setSkip((prevSkip) => prevSkip + 20);
      }
    } catch (error) {
      console.error("Failed to load materials:", error);
    } finally {
      setLoading(false);
    }
  }, [skip, loading]);

  // Initial load
  useEffect(() => {
    loadMaterials();
  }, []); // empty dependency means only on mount

  // Lazy load on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !loading) {
        loadMaterials();
      }
    });

    const current = observerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [loadMaterials, loading]);

  if (loading && materials.length === 0) {
    return (
      <Container className="grid grid-cols-2 2xl:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <MaterialCardSkeleton key={index} />
        ))}
      </Container>
    );
  }

  return (
    <div>
      <Container className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
        {materials.map((m) => (
          <MaterialCard key={m.Id} data={m} />
        ))}
      </Container>
      <div ref={observerRef}>{loading && <Loader />}</div>
    </div>
  );
};

export default Materials;
