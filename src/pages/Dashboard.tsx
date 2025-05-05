import { useEffect, useState, useRef } from "react";
import axios from "../hooks/axiosInstance";
import encodeFilter from "../utils/encodeFilter";
import MaterialCard from "../components/MaterialCard/MaterialCard";
import type { Material } from "../lib/types/types";

const Dashboard = () => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const loadMaterials = async () => {
    setLoading(true);
    const filter = encodeFilter({ Skip: skip, Limit: 20, Types: [1] });

    try {
      const res = await axios.get<{ Materials: Material[] }>(
        `/Materials/GetAll/?filter=${filter}`
      );
      const newMaterials = res.data.Materials;

      setMaterials((prev) => {
        const existingIds = new Set(prev.map((m) => m.Id));
        const uniqueNew = newMaterials.filter((m) => !existingIds.has(m.Id));
        return [...prev, ...uniqueNew];
      });

      setSkip((prevSkip) => prevSkip + 20);
    } catch (error) {
      console.error("Failed to load materials:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMaterials();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !loading) {
        loadMaterials();
      }
    });

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [loading]);

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="grid">
        {materials.map((m) => (
          <MaterialCard key={m.Id} data={m} />
        ))}
      </div>
      <div ref={observerRef}>Loading more...</div>
    </div>
  );
};

export default Dashboard;
